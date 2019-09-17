class Pokemon{
  constructor (temperature, weather){
    this.resultName = null;
    this.resultImage = null;
    this.pokemonName = 1;
    this.pokemonImage = null;
    this.temperature = temperature;
    this.pokemonBasedOnTemp = "";
    this.weather = weather;
    this.weatherPokemon = null;
  }


getPokemonData(){
  var self = this;
  var ajaxConfigObject ={
    dataType: 'json',
    url: "https://pokeapi.co/api/v2/pokemon/?limit=800",
    method: "GET",
    success: function(result){
      console.log("success", result, '\nselect bulbasaur:', result.results[0].name);
      self.result = result;
    },
    error:function(jqXHr,status,errorThrown){
      console.log("error");
      console.log("jqXHR", jqXHr);
      console.log("status", status);
      console.log("errorThrown", errorThrown);
    }
  }
$.ajax(ajaxConfigObject);
}

getPokemonImage() {
  var self = this;
  var ajaxConfig = {
    dataType: 'json',
    url: 'https://pokeapi.co/api/v2/pokemon/' + this.pokemonName,
    method: 'GET',
    success: function(result) {
      console.log('pokemon Images:', result.sprites["front_default"]);
      self.resultImage = result;
      self.pokemonImage = result.sprites["front_default"];
      //var appendImage = $('.pokemon').append.css(self.pokemonImage);
      var pokeImage = $('<img>').addClass('pokeImage').attr('src', self.pokemonImage);
      var appendImage = $('.pokemon').append(pokeImage);
    },
    error: function(result) {
      console.log('pokemonApi result:', result);
    }
  };
  $.ajax(ajaxConfig);
}

checkTemperature (temperature) {
  if (temperature >= 0 && temperature <= 75){
    this.pokemonBasedOnTemp = this.result.results[143].name;
    this.pokemonName = this.result.results[143].name;
  }
  if(temperature >=75 && temperature <=80){
    this.pokemonBasedOnTemp = this.result.results[3].name;
    this.pokemonName = this.result.results[3].name;
  } else if (temperature >= 81 && temperature <=86){
    this.pokemonBasedOnTemp = this.result.results[4].name;
    this.pokemonName = this.result.results[4].name;
  } else if( temperature >=87 && temperature <= 110){
    this.pokemonBasedOnTemp = this.result.results[5].name;
    this.pokemonName = this.result.results[5].name;
  }
}

checkWeather (weather) {
  switch(weather){
      case "cloudy":
        this.weatherPokemon = this.result.results[322].name;
        break;
      case "snow":
        this.weatherPokemon = this.result.results[451].name;
        break;
      case "rain":
        this.weatherPokemon = this.result.results[481].name;
        break;
      case 'clear-day':
        this.weatherPokemon = this.result.results[3].name;
        break;
      case 'thunderstorm':
        this.weatherPokemon = this.result.results[144].name;
    }
  return this.weatherPokemon;
  }
}

var pokegay = new Pokemon();
console.log(pokegay.getPokemonImage());
