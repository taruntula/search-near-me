class Pokemon{
  constructor (name, image,temperature){
    this.result = null;
    this.pokemonName = name;
    this.pokemonImageAddress = image;
    this.temperature = temperature;
    this.pokemonBasedOnTemp = "";
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

}

var pokegay = new Pokemon();
console.log(pokegay.getPokemonData());
