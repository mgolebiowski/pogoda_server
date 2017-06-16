var Client = require('node-rest-client').Client;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var client = new Client();
  var args = {
    headers: {
      "apikey": "196f0d5783ba416ca329fe7c7b383f3c"
    }
  };
  client.get("https://airapi.airly.eu/v1/sensor/measurements?sensorId=213", args, function (data, response) {
    prepData = data;
    res.send(prepData);
  });
});

module.exports = router;
