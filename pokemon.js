class Pokemon{
  constructor (temperature, weather){
    this.result = null;
    this.resultName = null;
    this.resultImage = null;
    this.pokemonName = null;
    this.pokemonImage = null;
    this.temperature = temperature;
    this.pokemonBasedOnTemp = "";
    this.weather = weather;
    this.weatherPokemon = null;
  }


getPokemonData(){
  var ajaxConfigObject ={
    dataType: 'json',
    url: "https://pokeapi.co/api/v2/pokemon/?limit=800",
    method: "GET",
    success: (result) => {
      this.result = result;
      this.checkTemperatureAndGetImage();
    },
    error:function(error){
      console.log("error", error);
    }
  }
$.ajax(ajaxConfigObject);
}

getPokemonImage() {
  var ajaxConfig = {
    dataType: 'json',
    url: this.pokemonName.url,
    method: 'GET',
    success: function(result) {
      this.resultImage = result;
      this.pokemonImage = result.sprites["front_default"];
      var pokeImage = $('<img>').addClass('pokeImage').attr('src', this.pokemonImage);
      $('.pokemon').append(pokeImage);
    }.bind(this),
    error: function(result) {
      console.log('pokemonApi result:', result);
    }
  };
  $.ajax(ajaxConfig);
}

checkTemperature (temperature) {
  var pokeText = $('.pokeText');
  if (temperature >= 0 && temperature <= 75){
    this.pokemonBasedOnTemp = this.result.results[143].name;
    this.pokemonName = this.result.results[143];
    pokeText.text(`It's a chilly day, make sure to grab a jacket!`);
  }
  if(temperature >=75 && temperature <=80){
    this.pokemonBasedOnTemp = this.result.results[3].name;
    this.pokemonName = this.result.results[3];
    pokeText.text(`It's a warm day. Perfect for shorts and a t-shirt!`);
  } else if (temperature >= 81 && temperature <=86){
    this.pokemonBasedOnTemp = this.result.results[4].name;
    this.pokemonName = this.result.results[4];
    pokeText.text(`It's a hot day. Make sure you stay hydrated!`);
  } else if(temperature >=87 && temperature <= 110){
    this.pokemonBasedOnTemp = this.result.results[5].name;
    this.pokemonName = this.result.results[5].name;
    pokeText.text(`Just stay inside...`);
  }
}

  checkTemperatureAndGetImage() {
    this.checkTemperature(this.temperature);
    this.getPokemonImage();
  }
}
