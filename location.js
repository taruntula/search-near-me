class Location {
  constructor(ipAddress){
    this.ipAddress = ipAddress;
    this.longitude = this.longitude;
    this.latitude = this.latitude;
    this.zipCode = this.zipCode;

  }
  getLocation () {

    var ajaxConfigObject = {
      dataType: 'json',
      //url: 'http://api.ipstack.com/' + this.ipAddress + '?access_key=1a1994f66f98738ef0680c97975ec64c',
      url: 'http://api.ipstack.com/174.76.22.227?access_key=1a1994f66f98738ef0680c97975ec64c',
      method: 'Get',
      data: {
        access_key: '1a1994f66f98738ef0680c97975ec64c',

      },
      success: function(response){
          console.log('response ', response)
      },
      error: function(response){
        console.log('response ', response)
      }
    }


    $.ajax(ajaxConfigObject);

  }


}
var getAjaxCall = new Location
console.log(getAjaxCall.getLocation());
