$(document).ready(initApp);


//var userLocation;
var weather = new DarkskyApi();

//debugger
var getAjaxCall = new Location( weather.getWeatherData );
console.log(getAjaxCall.getLocation());

function initApp() {
  $('.searchButton').click(function() {
    var searchValue = $('#search').val();
    var radiusValue = parseInt($('#radius').val());
    window.location.href = './page2/page2.html';
  })
}

function getInputValues() {
  var searchValue = $('#search').val();
  references.search = searchValue;
  references.radius = parseInt($('#radius').val());
  console.log(searchValue);
}
