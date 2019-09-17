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
          this.response = response;
          console.log('response ', response)
          self.longitude = response.longitude;
          console.log('longitude', this.longitude);
          self.latitude = response.latitude;
          console.log('latitude', this.latitude);
          self.zipCode = response.zip;
          console.log('zipcode', this.zipCode);
      },
      error: function(response){
        console.log('response ', response)
      }
    }


    $.ajax(ajaxConfigObject);

  }

  createObjects() {
    var weather = new DarkskyApi(this.longitude, this.latitude);
    return weather;
  }

}
var getAjaxCall = new Location;
console.log(getAjaxCall.getLocation());
