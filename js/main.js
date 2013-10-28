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
    
};

function matchValue () {
    if (match === true) {
        function x () {
            alert('You found a match!');
            window.location.reload();
        };
        setTimeout(x(), 5000);
    }
};

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