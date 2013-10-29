var match = false;
var hatval = '';
var interval;
var houses = [
    {'upc': '5556792', 'house': 'Djangopuff'},
    {'upc': '8357721', 'house': 'Griffimpact'},
    {'upc': '8358756', 'house': 'Redactaclaw'},
    {'upc': '8675309', 'house': 'SPSSlitherin'}
];

function checkHatValue(testvalue) {
    $.each(houses, function (key, obj) {
        if ($('#sorting-hat').val() == obj.upc) {
            $('#announcement').html(obj.house.toUpperCase() + '!!!').hide();
            // set match to true so we know to 
            match = true;
        }
    });
}

function matchValue (callback) {
    if (match === true) {
        clearInterval(interval)
        $('input').fadeOut();
        callback();
    }
}

function loadVideo () {
    var video = new $.BigVideo();
    video.init();
    video.show('/assets/Black_Magic_V2.mp4');

    setTimeout(function () {
        var house = $('#announcement').show();

        TweenLite.from(house, 1, { left: '632px' });
    }, 4000);

    video.getPlayer().ready(function () {
        this.on('ended', function () {
            window.location.reload();
        });
    });
}

$(document).ready(function () {
    $("#sorting-form").submit(function( event ) {
        event.preventDefault();
    });
    $('#sorting-hat').focus();
    
    interval = setInterval(function() { 
        checkHatValue($('#input_id').val());
        matchValue(loadVideo);
    }, 100);

});