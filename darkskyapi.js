var userLocation;

class DarkskyApi {
  constructor(){
    this.longitude = null;
    this.latitude = null;
    this.currentWeather = "";
    this.currentLocation = "";
    this.weatherIcon = "";
  }

  getWeatherData(latitude, longitude) {
    this.longitude = longitude;
    this.latitude = latitude;
    //debugger;
    var ajaxConfigObject = {
      dataType: 'json',
      url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/57024ed6d2133cb3fa08bc57de5d4926/'+this.longitude+','+this.latitude,
      method: "GET",
      success:  (result)=> {
        console.log("SUCCESS", result);
        var weatherIcon = result.currently.icon;
        this.weatherIcon = weatherIcon;
        var currentWeather = result.currently.temperature +"ºF";
        this.currentWeather = currentWeather;
        var currentLocation = result.timezone;
        this.currentLocation = currentLocation;
        var weatherContainer = $(".weather-container");
        var iconDiv = $(".weather-icon");
        var weatherContainer = $('.weather-container');
        switch (weatherIcon) {
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
      error:  (jqXHR, status, errorThrown) =>{
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

// var weather = new DarkskyApi(userLocation.longitude,userLocation.latitude);
// console.log(weather.getWeatherData());
