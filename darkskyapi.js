class DarkskyApi {
  constructor(longitude,latitude){
    this.longitude = longitude;
    this.latitude = latitude;
    this.currentWeather = "";
    this.weatherIcon = "";
  }
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
        var currentWeather = result.currently.temperature;
        self.currentWeather = currentWeather;
        var iconDiv = $(".weather-icon");
        switch (currentIcon) {
          case "clear-day":
            var weatherDiv = $("<i>").addClass("fas fa-sun");
            break;
          case "clear-night":
            var weatherDiv = $("<i>").addClass("fas fa-moon");
            break;
          case "rain":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-rain");
            break;
          case "snow":
            var weatherDiv = $("<i>").addClass("fas fa-snowflake");
            break;
          case "sleet":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-showers-heavy");
            break;
          case "wind":
            var weatherDiv = $("<i>").addClass("fas fa-wind");
            break;
          case "fog":
            var weatherDiv = $("<i>").addClass("fas fa-smog");
            break;
          case "cloudy":
            var weatherDiv = $("<i>").addClass("fas fa-cloud");
            break;
          case "partly-cloudy-day":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-sun");
            break;
          case "partly-cloudy-night":
            var weatherDiv = $("<i>").addClass("fas fa-cloud-moon");
            break;
          default:
            var weatherDiv = $("<i>").addClass("far fa-sun");
        }
        // debugger;
        var shortForecast = result.daily.summary;
        var forecastText = $("<div>").text(shortForecast);
        var dailyForecast = $(".icon-description");
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
