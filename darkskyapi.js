class DarkskyApi {
  constructor(longitude,latitude){
    this.longitude = longitude;
    this.latitude = latitude;
    this.currentWeather = "";
    this.currentLocation = "";
    this.weatherIcon = "";
  }

  // setLocation() {
  //   var locationObject = new Location();
  //   this.longitude = locationObject.longitude;
  //   this.latitude = locationObject.latitude;
  // }

  getWeatherData() {
    var self = this;
    var ajaxConfigObject = {
      dataType: 'json',
      url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/57024ed6d2133cb3fa08bc57de5d4926/'+self.longitude+','+self.latitude,
      method: "GET",
      success: function (result) {
        console.log("SUCCESS", result);
        var currentIcon = result.currently.icon;
        self.currentIcon = currentIcon;
        var currentWeather = result.currently.temperature +"ºF";
        self.currentWeather = currentWeather;
        var currentLocation = result.timezone;
        self.currentLocation = currentLocation;
        var iconDiv = $(".weather-icon");
        var weatherContainer = $(".weather-container");
        switch (currentIcon) {
          case "clear-day":
            var weatherDiv = $("<i>").addClass("fas fa-sun");
            iconDiv.css('color','yellow');
            weatherContainer.css('background-image','url(clear-day-background.jpeg)');
            break;
          case "clear-night":
            var weatherDiv = $("<i>").addClass("fas fa-moon");
            iconDiv.css('color', 'white');
            break;
          case "rain":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-rain");
            iconDiv.css('color', 'white');
            weatherContainer.css('background-image', 'url(rain-background.jpg)');
            break;
          case "snow":
            var weatherDiv = $("<i>").addClass("fas fa-snowflake");
            iconDiv.css('color', 'white');
            break;
          case "sleet":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-showers-heavy");
            iconDiv.css('color', 'white');
            break;
          case "wind":
            var weatherDiv = $("<i>").addClass("fas fa-wind");
            iconDiv.css('color', 'white');
            break;
          case "fog":
            var weatherDiv = $("<i>").addClass("fas fa-smog");
            iconDiv.css('color', 'white');
            break;
          case "cloudy":
            var weatherDiv = $("<i>").addClass("fas fa-cloud");
            iconDiv.css('color', 'white');
            break;
          case "partly-cloudy-day":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-sun");
            iconDiv.css('color', 'white');
            break;
          case "partly-cloudy-night":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-moon");
            iconDiv.css('color', 'white');
            break;
          default:
            var weatherDiv = $("<i>").addClass("far fa-sun");
            iconDiv.css('color', 'yellow');
        }
        // debugger;
        var shortForecast = result.daily.summary;
        var timeZoneDiv = $(".time-zone");
        var forecastText = $("<div>").text(shortForecast).css('position','relative');
        var timeZoneText = $("<div>").text(currentLocation).css('position','relative');
        var dailyForecast = $(".icon-description");
        timeZoneDiv.append(timeZoneText);
        dailyForecast.append(forecastText);
        iconDiv.append(weatherDiv);

      },
      error: function (jqXHR, status, errorThrown) {
        console.log("ERROR");
        console.log("jqXHR", jqXHR);
        console.log("status", status);
        console.log("errorThrown", errorThrown);
      }
    }
    $.ajax(ajaxConfigObject);
  }

  getWeatherIcon() {
    return this.weatherIcon;
  }

}

var weather = new DarkskyApi(33.635009,-117.740030);
console.log(weather.getWeatherData());
