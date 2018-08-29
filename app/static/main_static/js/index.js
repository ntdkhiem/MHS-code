$(document).ready(function() {
    $('form#user').on('submit', function(event) {
        event.preventDefault();
        var res = $.when(send_contact($('#contact-name').val(),$('#contact-email').val(),$('#contact-subject').val(),$('#contact-message').val()))
        $('#form-user-submit').addClass('running disabled')
        res.fail(function(data){
            console.log(res);
        });
        res.done(function(data){
            if (data.error) {
                $('#errorAlert').text(data.error).show();
                $('#errorAlert').append('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
                $('#form-user-submit').removeClass('running disabled btn-green');
            }
            else {
                $('#form-user-submit').removeClass('running btn-red');
                $('#form-user-submit').addClass('btn-green');
                $('#form-user-submit').text(data.success);
                $('#errorAlert').hide();
                $('#contact-name').val('');
                $('#contact-email').val('');
                $('#contact-subject').val('');
                $('#contact-message').val('');
            }
        });
    })
    function send_contact(name, email, sub,mesg){
        return  $.ajax({
                    data: {
                        name: name,
                        email: email,
                        subject : sub,
                        message : mesg
                    },
                    type: 'POST',
                    url: '/api/contact'
                })
    }
});