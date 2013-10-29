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
            $('#announcement').html(obj.house.toUpperCase() + '!!!');
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
    video.show('http://2.s3.envato.com/h264-video-previews/4500753.mp4');

    video.getPlayer().ready(function () {
        this.on('ended', function () {
            alert('this worked');
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