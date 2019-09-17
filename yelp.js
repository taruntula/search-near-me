class Yelp {
  constructor (zipCode, radiusInMiles, searchTerm) {
    this.zipCode = zipCode;
    this.radius = this.convertMilesToMeters(radiusInMiles);
    this.response = null;
    this.term = searchTerm; // will be $('selector').val() to grab value from input field.
  }

  apiRequest() {
    var self = this;
    var ajaxConfig = {
      dataType: 'json',
      url: `./yelp.php`,
      method: 'get',
      headers: {
        Authorization: "Bearer lW5xlHMb8jKbQ5KV82iD5Y9uVhWK4h9Apiwn2B38wyo8ohRFHVmlAWm8QDPwkoqcDA7I6QY_VwiyRDec-GY3BSpk286o7Dnf7caOoPIuQMHfgaqowqB3TIBp9DCAXXYx",
      },
      data: {
        location: self.zipCode,
        radius: self.radius,
        term: this.term,
      },
      success: function(response) {
        console.log("Yelp:",response);
        self.response = response;
        var newTable = $('<tr>').addClass('tableHead');
        $('.yelp').append(newTable);
        for (let i = 0; i < response.businesses.length; i++) {
          var yelpDiv = $('<div>').addClass('yelpBusiness' + i);
          var businessName = response.businesses[i].name;
          $('.yelp').append(yelpDiv);
          yelpDiv.text(businessName);
          if (i < 3) {
            var tableHeader = $('<th>');
            switch (i) {
              case 0:
                newTable.append(tableHeader);
                tableHeader.addClass('tableHeader price').text('PRICE');
                break;
              case 1:
                newTable.append(tableHeader);
                tableHeader.addClass('tableHeader place').text('PLACE');
                break;
              case 2:
                newTable.append(tableHeader);
                tableHeader.addClass('tableHeader distance').text('DISTANCE');
                break;
            }
          }
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

var test = new Yelp(92782, 10, 'sushi');
test.apiRequest();
