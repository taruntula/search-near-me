class Yelp {
  constructor (zipCode, radius) {
    this.zipCode = zipCode;
    this.radius = radius;
  }

  apiRequest() {
    var ajaxConfig = {
      dataType: 'json',
      url: 'https://api.yelp.com/v3/businesses/search?term=food&location=irvine&Authorization=lW5xlHMb8jKbQ5KV82iD5Y9uVhWK4h9Apiwn2B38wyo8ohRFHVmlAWm8QDPwkoqcDA7I6QY_VwiyRDec-GY3BSpk286o7Dnf7caOoPIuQMHfgaqowqB3TIBp9DCAXXYx',
      method: 'get',
      data: {
        location: this.zipCode,
        radius: this.radius,
        term: 'food',
        Authorization: 'lW5xlHMb8jKbQ5KV82iD5Y9uVhWK4h9Apiwn2B38wyo8ohRFHVmlAWm8QDPwkoqcDA7I6QY_VwiyRDec-GY3BSpk286o7Dnf7caOoPIuQMHfgaqowqB3TIBp9DCAXXYx',
      },
      success: function(response) {
        console.log(response);
      }
    };
    $.ajax(ajaxConfig);
  }
}

var ajax = new Yelp(92782, 10);
console.log(ajax.apiRequest());
