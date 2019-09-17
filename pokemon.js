class Pokemon{
  constructor (name, image,temperature, weather){
    this.result = null;
    this.pokemonName = name;
    this.pokemonImageAddress = image;
    this.temperature = temperature;
    this.pokemonBasedOnTemp = "";
    this.weather = "rain";
    this.weatherPokemon = this.checkWeather();
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

checkTemperature(temperature) {
  if (temperature >= 0 && temperature <= 75) {
    this.pokemonBasedOnTemp = this.result.results[143];
  }
  if(temperature >=75 && temperature <=80){
    this.pokemonBasedOnTemp = this.result.results[3].name;
  }else if (temperature >= 81 && temperature <=86){
    this.pokemonBasedOnTemp = this.result.results[4].name;
  }else if( temperature >=87 && temperature <= 110){
    this.pokemonBasedOnTemp = this.result.results[5].name;
  }


  }
checkWeather(weather){

  switch(weather){
      case "tornado":
        this.weatherPokemon = this.result.results[640].name;
        break;
      case "thunderstorm":
        this.weatherPokemon = this.result.results[144].name;
        break;
      case "hail":
        this.weatherPokemon = this.result.results[364].name;
        break;
      case "partly-cloudly-night":
        this.weatherPokemon = this.result.results[683].name;
        break;
      case "partly-cloudly-day":
        this.weatherPokemon = this.result.results[333].name;
        break;
      case "cloudy":
        this.weatherPokemon = this.result.results[322].name;
        break;
      case "fog":
        this.weatherPokemon = this.result.results[91].name;
        break;
      case "wind":
        this.weatherPokemon = this.result.results[15].name;
        break;
      case "sleet":
        this.weatherPokemon =  this.result.results[143].name;
        break;
      case "snow":
        this.weatherPokemon = this.result.results[451].name;
        break;
      case "rain":
        this.weatherPokemon = this.result.results[481].name;
        break;


  }
  return this.weatherPokemon;


}
}

var pokegay = new Pokemon();
console.log(pokegay.getPokemonData());
