module.exports = {
    PUSHSAVER_KEY : "INSERT_YOUR_KEY", // your pushsave api key
    PIN : 7, //listen SENSOR pin number
    RESET_PIN : 13, // Reset LED pin number
    LED_PIN : 11, //listen LED pin number
    LED_TIMEOUT : 10000, // Show LED for ms
    MIN_DELAY : 1000, // min delay between message send (in ms)
    MESSAGE : {
        m: 'Hurra, die Post war da!',
        s: '8',
        v: '2',
        i: '50'
    }
}
