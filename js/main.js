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
    var video = new $.BigVideo(),
        cinematics = ['/assets/Black_Magic_V2.mp4', '/assets/Black_Magic_V3.mp4', '/assets/Phoenix_Reveal.mp4'];

    function _getCinematic () {
        return cinematics[Math.floor(Math.random() * cinematics.length)];
    }

    function _getTimeout (somePath) {
        var time = 0;

        if (somePath === '/assets/Phoenix_Reveal.mp4') {
            time = 6000;
        } else {
            time = 3500;
        }

        return time;
    }

    var path = _getCinematic();

    video.init();
    video.show(path);

    setTimeout(function () {
        var house = $('#announcement').show();

        TweenLite.from(house, 1, { left: '632px' });
    }, _getTimeout(path));

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