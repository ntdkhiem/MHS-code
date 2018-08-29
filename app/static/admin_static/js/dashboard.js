$(document).ready(function() {
    
    if ($('a#load-more')) {
        $('a#load-more').on('click', function(e) {
            e.preventDefault();
            data = get_data($('a#load-more').data("next"))
            data.done(function(d) {
                for (var i in d.divs) {
                    $('div#officers-container').append(d.divs[i])
                };
                if (d._links.next == null) {
                    $('a#load-more').remove()
                }
                else {
                    $('a#load-more').data("next", d._links.next)
                }
            });
        })
    }
    function get_data(url) {
        return $.ajax({
            type: 'GET',
            url: url
        })
    }
})