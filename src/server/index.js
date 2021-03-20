const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const https = require('follow-redirects').https;
const fs = require('fs');
const app = express()


app.use


app.use(express.static('dist'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post('/getSentiment', (req, res) => {
    const inputURL = req.body.inputURL;
    dataGetter(inputURL, res);

})

const dataGetter = (inputURL, res) => {
    const options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': `/sentiment-2.1?key=${process.env.API_KEY}&of=json&lang=en&url=${inputURL}`
    };

    const gatherSent = response => {
        var chunks = '';

        response.on("data", function (chunk) {
            chunks += chunk;
        });

        response.on("end", function () {
            // var body = Buffer.concat(chunks);
            res.send(chunks);
        });

        response.on("error", function (error) {
            console.error(error);
        });
    }

    var reqSent = https.request(options, gatherSent);

    reqSent.end();
}

