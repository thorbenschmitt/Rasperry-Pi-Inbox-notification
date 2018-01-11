var rpio = require('rpio');
var push = require('pushsafer-notifications');
var cfg = require('./config');

var p = new push({
    k: cfg.PUSHSAVER_KEY,
    debug: true
});
var timeoutObj;
var last_send = Date.now();
rpio.open(cfg.PIN, rpio.INPUT, rpio.PULL_DOWN);
rpio.open(cfg.RESET_PIN, rpio.INPUT, rpio.PULL_DOWN);
rpio.open(cfg.LED_PIN, rpio.OUTPUT, rpio.HIGH);

function pollcb(pin) {
    if (rpio.read(pin) && Date.now() > last_send + cfg.MIN_DELAY) {
        console.log("SEND");
        p.send(cfg.MESSAGE, function(err, result) {
            console.log('RESULT', result);
        });
        rpio.write(cfg.LED_PIN, rpio.LOW);

        timeoutObj = setTimeout(resetLed, cfg.LED_TIMEOUT)
        last_send = Date.now();
    }
}
rpio.poll(cfg.PIN, pollcb);

function resled(pin) {
    if (rpio.read(pin)){
        resetLed()
    }
}
rpio.poll(cfg.RESET_PIN, resled);

function resetLed() {
    clearTimeout(timeoutObj);

    console.log("RESET PIN");
    rpio.write(cfg.LED_PIN, rpio.HIGH);

}
