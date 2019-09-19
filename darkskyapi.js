//var userLocation;

class DarkskyApi {
  constructor(){
    this.longitude = null;
    this.latitude = null;
    this.currentWeather = "";
    this.currentLocation = "";
    this.weatherIcon = "";
  }

  getWeatherData(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
    var ajaxConfigObject = {
      dataType: 'json',
      url: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/57024ed6d2133cb3fa08bc57de5d4926/'+this.latitude+','+this.longitude,
      method: "GET",
      success:  (result)=> {
        var weatherIcon = result.currently.icon;
        this.weatherIcon = weatherIcon;
        var currentWeather = result.currently.temperature;
        this.currentWeather = parseFloat(currentWeather);
        var displayWeather = Math.floor(currentWeather);
        var currentLocation = result.timezone;
        this.currentLocation = currentLocation;
        var currentWeatherDiv = $(".current-weather");
        var iconDiv = $(".weather-icon");
        var weatherDiv;
        switch (weatherIcon) {
          case "clear-day":
            weatherDiv = $("<i>").addClass("fas fa-sun");
            iconDiv.css('color','yellow');
            break;
          case "clear-night":
            weatherDiv = $("<i>").addClass("fas fa-moon");
            iconDiv.css('color', 'white');
            break;
          case "rain":
            weatherDiv = $("<i>").addClass("fas fa-cloud-rain");
            iconDiv.css('color', 'white');
            break;
          case "snow":
            weatherDiv = $("<i>").addClass("fas fa-snowflake");
            iconDiv.css('color', 'white');
            break;
          case "sleet":
            weatherDiv = $("<i>").addClass("fas fa-cloud-showers-heavy");
            iconDiv.css('color', 'white');
            break;
          case "wind":
            weatherDiv = $("<i>").addClass("fas fa-wind");
            iconDiv.css('color', 'white');
            break;
          case "fog":
            weatherDiv = $("<i>").addClass("fas fa-smog");
            iconDiv.css('color', 'white');
            break;
          case "cloudy":
            weatherDiv = $("<i>").addClass("fas fa-cloud");
            iconDiv.css('color', 'white');
            break;
          case "partly-cloudy-day":
            weatherDiv = $("<i>").addClass("fas fa-cloud-sun");
            iconDiv.css('color', 'white');
            break;
          case "partly-cloudy-night":
            weatherDiv = $("<i>").addClass("fas fa-cloud-moon");
            iconDiv.css('color', 'white');
            break;
          default:
            weatherDiv = $("<i>").addClass("far fa-sun");
            iconDiv.css('color', 'yellow');
        }
        var shortForecast = result.daily.summary;
        var timeZoneDiv = $(".time-zone");
        var forecastText = $("<div>").text(shortForecast).css('position','relative');
        var timeZoneText = $("<div>").text(currentLocation).css('position','relative');
        var dailyForecast = $(".icon-description");
        currentWeatherDiv.text(displayWeather+"ºF   ");
        dailyForecast.append(forecastText);
        iconDiv.append(weatherDiv);
        var pokemon = new Pokemon(this.currentWeather, this.weatherIcon);
        pokemon.getPokemonData();

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
