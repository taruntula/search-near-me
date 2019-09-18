$(document).ready(initApp);


function initApp() {
  debugger;
  $('.searchButton').click(function() {
    var searchValue = $('#search').val();
    var radiusValue = parseInt($('#radius').val());
    //var userLocation;
    var weather = new DarkskyApi();

    //debugger
    var getAjaxCall = new Location(weather.getWeatherData, radiusValue, searchValue);
    console.log(getAjaxCall.getLocation());
    window.location.href = './page2/page2.html';
  })
}

function getInputValues() {
  var searchValue = $('#search').val();
  references.search = searchValue;
  references.radius = parseInt($('#radius').val());
  console.log(searchValue);
}
