$(document).ready(function() {
    $("#masterresume").hide("#masterresume")
    $('body').append("<button id='clickyButton'>Click me!</button>");

    $("body").on('click', '#clickyButton', function () {
        $('#clickyButton').hide();
        $("#masterresume").hide("#masterresume").slideDown("slow");

    })
    $("body").on('click', '#masterresume', function(){
        $("#masterresume").hide("#masterresume").slideUp("slow");
        $('#clickyButton').show();
    })
});