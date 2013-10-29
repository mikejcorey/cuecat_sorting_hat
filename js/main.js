var match = false;
var hatval = '';
var interval;
var houses = [
    {'upc': '5556792', 'house': 'djangopuff'},
    {'upc': 'bar', 'house': 'griffennull'}
];

function checkHatValue(testvalue) {
    $.each(houses, function (key, obj) {
        if ($('#sorting-hat').val() == obj.upc) {
            $('#announcement').html(obj.house.toUpperCase() + '!!!');
            // set match to true so we know to 
            match = true;
        };
    });
    
}

function matchValue (callback) {
    if (match === true) {
        clearInterval(interval)
        $('input').fadeOut();
        callback();
    }
}

function loadVideo (callback) {
    var video = new $.BigVideo();
    video.init();
    video.show('/assets/animation.mp4');

    releaseTheKraken();
}

function releaseTheKraken() {
    var player = _V_('big-video-vid_html5_api');
    player.ready(function () { 
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

    var val = 0;
    
    window.interval = setInterval(function() { 
        checkHatValue($('#input_id').val());
        matchValue(loadVideo);
    }, 100);
}); 