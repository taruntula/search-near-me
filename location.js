class Location {
  constructor(){
    this.longitude = this.longitude;
    this.latitude = this.latitude;
    this.zipCode = this.zipCode;
    this.response = null;

  }
  getLocation () {
    var self = this;
    var ajaxConfigObject = {
      dataType: 'json',
      //url: 'http://api.ipstack.com/' + this.ipAddress + '?access_key=1a1994f66f98738ef0680c97975ec64c',
      url: 'http://api.ipstack.com/check?access_key=1a1994f66f98738ef0680c97975ec64c',
      method: 'Get',
      data: {
        access_key: '1a1994f66f98738ef0680c97975ec64c',

      },
      success: function(response){
          self.response = response;
          console.log('response ', response)
          self.longitude = response.longitude;
          console.log('longitude', self.longitude);
          self.latitude = response.latitude;
          console.log('latitude', self.latitude);
          self.zipCode = response.zip;
          console.log('zipcode', self.zipCode);
      },
      error: function(response){
        console.log('response ', response)
      }
    }


    $.ajax(ajaxConfigObject);

  }

  createWeatherObj() {
    var weather = new DarkskyApi(this.longitude, this.latitude);
  }

}
var getAjaxCall = new Location;
console.log(getAjaxCall.getLocation());
