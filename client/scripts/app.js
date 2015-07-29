$(document).ready(function(){
    $('body').append("<button id='clickyButton'>Click me!</button>");

    $("body").on('click','#clickyButton', function(){
        $.ajax({
            url: "/data-request",
            success: function(data){
                console.log(data);
            }
        })
    });
});