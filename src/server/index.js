var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});


app.post('/fetch', function (req, res) {
    const userUrl = req.body.url;
    const appKey = process.env.API_KEY;
    const appUrl = process.env.API_URL;
    let apiUrl = `${appUrl}?key=${appKey}&url=${userUrl}&lang=en`;

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