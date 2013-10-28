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

function matchValue () {
    if (match === true) {
        alert('You found a match!');
        window.location.reload();
    }
}

$(document).ready(function () {
    $("#sorting-form").submit(function( event ) {
        event.preventDefault();
    });
    $('#sorting-hat').focus();

    interval = setInterval(function() {
        checkHatValue($('#input_id').val());

        matchValue();
    }, 100);
});
