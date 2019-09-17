class Yelp {
  constructor (zipCode, radiusInMiles) {
    this.zipCode = zipCode;
    this.radius = this.convertMilesToMeters(radiusInMiles);
  }

  apiRequest() {
    var ajaxConfig = {
      dataType: 'json',
      url: `./yelp.php`,
      method: 'get',
      headers: {
        Authorization: "Bearer lW5xlHMb8jKbQ5KV82iD5Y9uVhWK4h9Apiwn2B38wyo8ohRFHVmlAWm8QDPwkoqcDA7I6QY_VwiyRDec-GY3BSpk286o7Dnf7caOoPIuQMHfgaqowqB3TIBp9DCAXXYx",
      },
      data: {
        location: this.zipCode,
        radius: this.radius,
        term: 'food',
      },
      success: function(response) {
        console.log("Yelp:",response);
        for (let i = 0; i < response.businesses.length; i++) {
          var newDiv = $('<div>').addClass('foodBusiness');
          var businessName = response.businesses[i].name;
          newDiv.text(businessName);
          $('body').append(newDiv);
        }
      },
      error: function (response) {
        console.log("Yelp error:", response);
      }
    };
    $.ajax(ajaxConfig);
  }

  convertMilesToMeters(miles) {
    return miles * 1609;
  }
}

var ajax = new Yelp(92782, 10);
ajax.apiRequest();
