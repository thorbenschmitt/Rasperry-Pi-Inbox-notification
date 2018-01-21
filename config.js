module.exports = {
    PUSHSAVER_KEY : "INSERT_YOUR_KEY", // your pushsave api key
    PIN : 7, //listen SENSOR pin number
    RESET_PIN : 13, // Reset LED pin number
    LED_PIN : 11, //listen LED pin number
    LED_TIMEOUT : 10000, // Show LED for ms
    MIN_DELAY : 3000, // min delay between message send (in ms)
    MESSAGES : [
        // STANDARD
        {
            m: 'Post ist da!  Bitte den Briefkasten leeren!',
            s: '26',
            v: '3',
            i: '30',
            d: 'gs739'
        },
        // SILENT
        {
            m: 'Post ist da!  Bitte den Briefkasten leeren!',
            s: '0', // Sound (value 0-28) (optional)
            v: '3',
            i: '30',
            d: 'gs739' // Device or Device group id
        }
    ]

}
