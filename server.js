var rpio = require('rpio');
var push = require('pushsafer-notifications');

var PUSHSAVER_KEY = "INSERT_YOUR_KEY"; // your pushsave api key
var PIN = 7; //listen on pin number
var MIN_DELAY = 1000; // min delay between message send (in ms)



var p = new push({
    k: PUSHSAVER_KEY,
    debug: true
});
var msg = {
    m: 'Hurra, die Post war da!',
    s: '8',
    v: '2',
    i: '50'
};
var last_send = Date.now();
rpio.open(PIN, rpio.INPUT, rpio.PULL_DOWN);
function pollcb(pin) {
    if (rpio.read(pin) && Date.now() > last_send + MIN_DELAY) {
        p.send(msg, function(err, result) {
            console.log('RESULT', result);
        });
        last_send = Date.now();
    }
}
rpio.poll(PIN, pollcb);
