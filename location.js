class Location {
  constructor( gotLocationCallback, radius, searchTerm ){
    this.longitude = this.longitude;
    this.latitude = this.latitude;
    this.zipCode = this.zipCode;
    this.city = null;
    this.state = null;
    this.locationCallback = gotLocationCallback;
    this.response = null;
    this.returnZip = this.returnZip.bind(this);
    this.radius = radius;
    this.searchTerm = searchTerm;
    this.city = null;
    this.state = null;
  }
  getLocation () {
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
          this.latitude = response.latitude;
          this.zipCode = response.zip;
          this.response = response;
          this.city = response.city;
          this.state = response['region_code'];
          console.log(response);
          var currentLocationP = $('<p>');
          currentLocationP.text(`${this.city}, ${this.state} ${this.zipCode}`);
          $('.initial-location').append(currentLocationP);
          this.locationCallback(this.latitude, this.longitude);
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
