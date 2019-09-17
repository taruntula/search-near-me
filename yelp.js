class Yelp {
  constructor (zipCode, radius) {
    this.zipCode = zipCode;
    this.radius = radius;
  }

  apiRequest() {
    var ajaxConfig = {
      dataType: 'json',
      url: './yelp.php',
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
      },
      error: function (response) {
        console.log("Yelp error:", response);
      }
    };
    $.ajax(ajaxConfig);
  }
}

var ajax = new Yelp(92782, 10);2
ajax.apiRequest();
