class Location {
  constructor( gotLocationCallback, radius, searchTerm ){
    this.longitude = this.longitude;
    this.latitude = this.latitude;
    this.zipCode = this.zipCode;
    this.locationCallback = gotLocationCallback;
    this.response = null;
    this.returnZip = this.returnZip.bind(this);
    this.radius = radius;
    this.searchTerm = searchTerm;
  }
  getLocation () {
    //var self = this;
    var ajaxConfigObject = {
      dataType: 'json',
      url: 'http://api.ipstack.com/174.76.22.227?access_key=1a1994f66f98738ef0680c97975ec64c',
      method: 'Get',
      data: {
        access_key: '1a1994f66f98738ef0680c97975ec64c',

      },
      success: (response)=>{
        //debugger
          this.longitude = response.longitude;
          //console.log('longitude', this.longitude);
          this.latitude = response.latitude;
          //console.log('latitude', this.latitude);
          this.zipCode = response.zip;
          //console.log('zipcode', this.zipCode);
          this.response = response;
          console.log(response);
          this.locationCallback(this.latitude, this.longitude);
          debugger;
          var yelp = new Yelp(this.returnZip, this.radius, this.searchTerm);
          yelp.apiRequest();
      },
      error: function(response){
        console.log('response ', response)
      }.bind(this)
    }


    $.ajax(ajaxConfigObject);

  }

  returnZip() {
    return this.zipCode;
  }
}
