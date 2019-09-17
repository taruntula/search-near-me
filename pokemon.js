class Pokemon{
  constructor (name, image){

    this.pokemonName = name;
    this.pokemonImageAddress = image;

  }


getPokemonData(){
  var ajaxConfigObject ={
    dataType: 'json',
    url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
    method: "GET",
    success: function(result){
      console.log("success", result, '\nselect bulbasaur:', result.results[0].name);
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

}

var pokegay = new Pokemon();
console.log(pokegay.getPokemonData());
