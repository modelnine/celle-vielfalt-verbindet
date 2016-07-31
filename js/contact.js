$(function() {

    $("#contact input,#contact textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
        },
        submitSuccess: function($form, event) {
            $("#btnSubmit").attr("disabled", true);
            event.preventDefault();
            $.ajax({
                url: "contact.php",
                type: "POST",
                data: new FormData($form[0]),
                cache: false,
                contentType: false,
                processData: false,
                success: function() {
                    // Enable button & show success message
                    $("#btnSubmit").attr("disabled", false);
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Ihre Nachricht wurde versendet. Vielen Dank für Ihr Interesse an der Teilnahme an Celle - Vielfalt verbindet!</strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields after send.
                    $('#contact').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $("#btnSubmit").attr("disabled", false);
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Leider konnte Ihre Nachricht nicht versendet werden. Bitte prüfen Sie Ihre Eingabe und wiederholen Sie den Vorgang!</strong>");
                    $('#success > .alert-danger').append('</div>');
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });
});
