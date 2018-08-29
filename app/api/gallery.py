from flask import jsonify, request, url_for, abort
from app import db
from app.models import Gallery
from app.api import bp
from app.api.errors import bad_request

@bp.route('/gallery/<int:id>', methods=['GET'])
def get_picture(id):
    picture = Gallery.query.get_or_404(id)
    if picture.deleted:
        abort(404)
    return jsonify(picture.to_dict())

@bp.route('/gallery/<int:id>', methods=['PUT'])
def edit_picture(id):
    picture = Gallery.query.get_or_404(id)
    if picture.deleted:
        abort(404)
    data = request.form.get('title')
    if data:
        picture.change_title(data)
        db.session.commit()
        response = jsonify(picture.to_dict())
        response.status_code = 201
        response.headers['Location'] = url_for('api.edit_picture', id=picture.id)
        return response
    return bad_request('missing data, please try again.')

@bp.route('/gallery/<int:id>', methods=['DELETE'])
def delete_picture(id):
    picture = Gallery.query.get_or_404(id)
    if picture.deleted:
        abort(404)
    picture.deleted = True
    db.session.commit()
    return '', 204

@bp.route('/gallery', methods=['GET'])
def get_gallery():
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 4, type=int), 100)
    data = Gallery.to_collection_dict(Gallery.query.filter_by(deleted=False).order_by(Gallery.timestamp.desc()), page, per_page, 'api.get_gallery')
    if request.args.get('html'):
        divs = []
        for item in data['items']:
            divs.append('''
                <div class="col-md-3 col-sm-6 col-12 mb-4">
                    <a class="" href="{image}" data-lightbox="indoor" data-title="{title}">
                        <div class="view overlay zoom w-100 h-100">
                            <img class="img-fluid img-thumbnail z-depth-1" src="{image}" alt="{id}"/>
                            <div class="mask flex-center rgba-red-strong waves-effect waves-light">
                                <p class="white-text">Click for fullscreen</p>
                            </div>
                        </div>
                    </a>
                </div>
            '''.format(image=url_for('content.main', image_url=item['url']), title=item['title'], id=item['id']))
        payload = {
            "_links": {
                "next": data['_links']['next'],
                "prev": data['_links']['prev'],
                "self": data['_links']['self']
            },
            "_meta": {
                "page": data['_meta']['page'],
                "per_page": data['_meta']['per_page'],
                "total_items": data['_meta']['total_items'],
                "total_pages": data['_meta']['total_pages']
            },
            'divs': divs
        }
        return jsonify(payload)
    return jsonify(data)