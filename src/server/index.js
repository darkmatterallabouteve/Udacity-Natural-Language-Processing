var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();

const fetch = require('node-fetch');

// Require the Aylien npm package
//var AylienNewsApi = require("aylien-news-api");
//var defaultClient = AylienNewsApi.ApiClient.instance;
//var app_id = defaultClient.authentications["app_id"];
//app_id.apiKey = process.env["NEWSAPI_APP_ID"];
//var app_key = defaultClient.authentications["app_key"];
//app_key.apiKey = process.env["NEWSAPI_APP_KEY"];
//var api = new AylienNewsApi.DefaultApi();
//response = requests.post(url, data=payload)

const app = express()

app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('dist'))

app.get('/', function (req, res) {
    console.log(`Your API key is ${process.env.API_KEY}`);
    res.sendFile('dist/index.html')
})

app.post('/meaningCloudApiCall', getSentimentAnalysis)

async function getSentimentAnalysis(req, res) {

    const urlToAPI = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&txt=" + req.body.title + "&lang=en";

        const response = await fetch(urlToAPI);
        try {
            const sentiment = await response.json();
             console.log("sentiment: ", sentiment);
             res.send(sentiment)

        } catch (error) {
            console.log("error", error)
        }
    }

app.post('/aylienNewsApiCall', getNews)

async function getNews(req, res) {
    var opts = {
        title: req.body.title,
        publishedAtStart: "NOW-7DAYS",
        publishedAtEnd: "NOW"
      };

    api.listStories(opts, 
        function(error, response) {
            if (error) {
                console.error(error);
            } else {
                res.send(response);
            }
        }
    );
}

// designates what port the app will listen to for incoming requests
const server = app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

module.exports = getNews;