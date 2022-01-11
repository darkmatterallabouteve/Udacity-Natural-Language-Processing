var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

// Require the Aylien npm package
var AylienNewsApi = require("aylien-news-api");
var defaultClient = AylienNewsApi.ApiClient.instance;

var app_id = defaultClient.authentications["app_id"];
//app_id.apiKey = process.env["NEWSAPI_APP_ID"];
app_id.apiKey = "4b317529";

var app_key = defaultClient.authentications["app_key"];
//app_key.apiKey = process.env["NEWSAPI_APP_KEY"];
app_key.apiKey = "a7eb545ea929ceb51a064f2415f37b14";

var api = new AylienNewsApi.DefaultApi();

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
    res.sendFile('dist/index.html')
})

app.post('/aylienNewsApiCall', function (req, res) {
    
    var opts = {
        title: req.body.url,
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
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
