var rpio = require('rpio');
var usonic = require('mmm-usonic');
usonic.init(function (error) {
    if (error) {
        console.log("ERROR");
    } else {
        var sensor = usonic.createSensor(3,5, 1000);
        setInterval(function() {
            console.log('Distance: ' + sensor().toFixed(2) + ' cm');
        }, 60);

    }
});
