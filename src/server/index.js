var path = require('path');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});


app.post('/fetch', function (req, res) {
    const userUrl = req.body.url;
    const apikey = process.env.API_KEY;
    const apiurl = process.env.API_URL;
    let apiUrl = `${apiurl}?key=${apikey}&url=${userUrl}&lang=en`;

    fetch(apiUrl).then((response) => {
        return response.json();
    })
        .then(data => {
            if (data.status.msg === "OK") {
                return res.send(data);
            } else {
                throw new Error(`The HTTP status of the reponse: ${JSON.stringify(data.status)}`);
            }
        })
        .catch(error => {
            console.log("error");
        })

});