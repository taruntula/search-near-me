$(document).ready(initApp);


function initApp() {

  $('.searchButton').click(function() {
    var searchValue = $('#search').val();
    var radiusValue = parseInt($('#radius').val());
    var weather = new DarkskyApi();
    var getAjaxCall = new Location(weather.getWeatherData, radiusValue, searchValue);
    console.log(getAjaxCall.getLocation());
    $('.modal').removeClass('visible');
    $('.modal').addClass('hidden');
  })
}
