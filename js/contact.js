    // Working Contact Form
    $('#contact-form').submit(function () {
        var action = $(this).attr('action');

        $("#message").slideUp(750, function () {
            $('#message').hide();

            $('#submit')
                .before('')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    comments: $('#comments').val(),
                },
                function (data) {
                    console.log(data);
                    document.getElementById('comments').value = "";
                    document.getElementById('name').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('message').innerHTML = "Thanks. I have received your message and I'll be reaching your very soon via email.";
                    $('#message').slideDown('slow');
                    $('#cform img.contact-loader').fadeOut('slow', function () {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.status.match('ok') != null) $('#cform').slideUp('slow');
                }
            );

        });

        return false;

    });