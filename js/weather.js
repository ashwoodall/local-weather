$(document).ready(function() {
  getLocation();
});

function getLocation() {
  var url = "http://ip-api.com/json";
  $.getJSON(url, function(json) {
    var currentLat = json.lat;
    var currentLong = json.lon;
    
    $(".location").html(json.city +" - " + json.country);
    

    getTemp(currentLat,currentLong);
  });
}

function getTemp(currentLat,currentLong) {
  var getURL = 'https://simple-weather.p.mashape.com/weatherdata?lat=' + currentLat +'&lng=' + currentLong + '&deg=F';

  $.ajax({
    headers: {
      "X-Mashape-Key": "2lp07ix0Wbmshx4DT1QG8ZuPr3Ynp15ZORmjsnRTWmCuVL8gO1"
    },
    url: getURL,
    success: function(response) {
      var json_obj = JSON.parse(response);
      var current = json_obj.query.results.channel.item;
      var temp = current.condition.temp;
      var far = Math.round(temp * 1.8 + 32); 
      var condIcon = parseInt(current.condition.code, 10);
      var description = current.condition.text;
      var units = json_obj.query.results.channel.units;

      $(".far").html(far + ' ' + '&#8457')
      $(".temp").html(temp + ' ' + '&#8451');
      $(".description").html(description);
      
      switch (condIcon) {
        case 0:
        condIcon = 'tornado';
        break;

        case 1:
        case 2:
        condIcon = 'hurricane';
        break;

        case 3:
        case 4:
        condIcon = 'day-thunderstorm';
        break;

        case 5:
        case 6:
        case 7:
        condIcon = 'rain-mix';
        break;

        case 8:
        case 9:
        condIcon = 'showers';
        break;

        case 10:
        case 11:
        case 12:
        condIcon = 'rain';
        break;

        case 13:
        case 14:
        case 15:
        case 16:
        condIcon = 'snow';
        break;

        case 17:
        case 18:
        condIcon = 'hail';
        break;

        case 19:
        condIcon = 'dust';
        break;

        case 20:
        case 21:
        condIcon = 'fog';
        break;

        case 22:
        condIcon = 'smoke';
        break;

        case 23:
        case 24:
        condIcon = 'windy';
        break;

        case 25:
        condIcon = 'snowflake-cold';
        break;

        case 26:
        condIcon = 'cloudy';
        break;

        case 27:
        case 29:
        condIcon = 'night-cloudy';
        break;

        case 28:
        case 30:
        condIcon = 'day-cloudy';
        break;

        case 31:
        condIcon = 'night-clear';
        break;

        case 32:
        condIcon = 'day-sunny';
        break;

        case 33:
        condIcon = 'stars';
        break;

        case 34:
        condIcon = 'sunny';
        break;

        case 35:
        condIcon = 'rain-mix';
        break;

        case 36:
        condIcon = 'hot';
        break;

        case 37:
        case 38:
        case 39:
        condIcon = 'thunderstorm';
        break;

        case 40:
        condIcon = 'sprinkles';
        break;

        case 41:
        case 42:
        condIcon = 'snow';
        break;

        case 44:
        condIcon = 'day-cloudy';
        break;

        case 45:
        condIcon = 'thundershower';
        break;

        case 46:
        condIcon = 'snow';
        break;

        case 47:
        condIcon = 'storm-showers';
        break;

        case 3200:
        condIcon = 'thermometer-exterior';
        break;

        default:
        condIcon = 'thermometer-exterior';
      }

    // add the css prefix
    condIcon = 'wi-' + condIcon;

    // set the image
    $('.icon').addClass('wi').addClass(condIcon);
  }
});
}