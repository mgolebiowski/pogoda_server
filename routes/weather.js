var Client = require('node-rest-client').Client;
var express = require('express');
var router = express.Router();

/* GET weather */
router.get('/', function(req, res, next) {
  var client = new Client();
  client.get("http://meteo.ftj.agh.edu.pl/meteo/meteo.xml", function (data, response) {
    /*
    {"meteo":
      {
        "miasto":"Kraków",
        "nazwa_stacji":"Zespół Fizyki Środowiska",
        "szerokosc_geograficzna":"50°04'N",
        "dlugosc_geograficzna":"19°57'E",
        "wysokosc_npm":"202m",
        "dane_aktualne":
        {
          "$":{"data":"2017-06-17 00:27:05+02"},
          "ta":"13.7 °C",
          "ua":"70.7 %",
          "odew":"8.5 °C",
          "owindchill":"11.8 °C",
          "oheatindex":"Brak danych",
          "sx":"4.6 m/s",
          "sm":"3.5 m/s",
          "dm":"280 °",
          "pa":"987.7 hPa",
          "barosealevel":"1012.2 hPa",
          "rc":"1.63 mm",
          "hc":"0 hits/cm^2",
          "ri":"0 mm/h",
          "hi":"0 hits/(cm^2*h)",
          "tendency":"cloudy"
        }
      }
    }
    */
    var prepData = {
      "date": data.meteo.dane_aktualne.$.data,
      "ta": data.meteo.dane_aktualne.ta,
      "owindchill": data.meteo.dane_aktualne.owindchill,
      "pa": data.meteo.dane_aktualne.pa,
      "rc": data.meteo.dane_aktualne.rc
    }
    res.send(prepData);
  });

});

module.exports = router;
