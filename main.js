$(document).ready(initApp);


function initApp() {

  $('.searchButton').click(function() {
    var searchValue = $('#search').val();
    var radiusValue = parseInt($('#radius').val());
    //var userLocation;
    var weather = new DarkskyApi();

    //debugger
    var getAjaxCall = new Location(weather.getWeatherData, radiusValue, searchValue);
    //yelp.apiRequest();
    console.log(getAjaxCall.getLocation());
    $('.modal').removeClass('visible');
    $('.modal').addClass('hidden');
    // window.location.href = './page2/page2.html';
  })
}

// function getInputValues() {
//   var searchValue = $('#search').val();
//   references.search = searchValue;
//   references.radius = parseInt($('#radius').val());
//   console.log(searchValue);
// }
