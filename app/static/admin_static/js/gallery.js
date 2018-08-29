$(document).ready(function() {
    $('div#gallery-container').children('div.col-lg-3').each(function() {
        $(this).children('div.card').children('div.card-body').children('form').on('submit', function (event){
            event.preventDefault();
            var id_form = $(this).children('input').attr("id");
            console.log(id_form);
            var res = edit_title(id_form, $(this).children('input').val());
            res.fail(function(data) {
                console.log(res);
            })
            res.done(function(data) {
                if (data.id) {
                    $(this).children('input').blur(); 
                    alert('SUCCESS');
                }
            })
        })
    })
    $('button.close').on('click', function(event) {
        $(this).closest('div').fadeOut();
        var res = delete_pic($(this).attr("id"));
        res.fail(function(data) {
            console.log(res);
        })
        res.done(function(data) {
            console.log(res);
            if (res.status == 204) {
                alert("SUCCESS");
            } else {
                alert("ERROR");
            }
        })
    })
    function edit_title(id,title){
        return $.ajax({
            data: {
                title: title
            }, 
            type: 'PUT',
            url: '/api/gallery/' + id
        })
    }
    function delete_pic(id){
        return $.ajax({
            type: 'DELETE',
            url: '/api/gallery/' + id
        })
    }
})