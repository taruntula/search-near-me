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

// <? php
// //questions?  Ask Dan Paschal daniel.paschal@learningfuze.com
// $proxyURL = "https://api.yelp.com/v3/businesses/search?term=food&location=irvine&Authorization=lW5xlHMb8jKbQ5KV82iD5Y9uVhWK4h9Apiwn2B38wyo8ohRFHVmlAWm8QDPwkoqcDA7I6QY_VwiyRDec-GY3BSpk286o7Dnf7caOoPIuQMHfgaqowqB3TIBp9DCAXXYx";
// //$proxyURL = "https://api.fortnitetracker.com/v1/profile/{$_GET['platform']}/{$_GET['player']}";
// $acceptableHeaders = ['TRN-Api-Key'];

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: ".implode(',', $acceptableHeaders));
// $params = '';
// foreach($_GET as $key=> $value){
//   $params.= ("&$key=".urlencode($value));
// }
// $postparams = '';
// foreach($_POST as $key=> $value){
//   $params.= ("&$key=".urlencode($value));
// }

// $headers = apache_request_headers();

// $curl = curl_init();
// $headerParams = [];
// foreach($headers as $key=> $value){
//   if (in_array($key, $acceptableHeaders)) {
//     $headerParams[] = "$key:$value";
//   }
// }
// curl_setopt_array($curl, array(
//   CURLOPT_URL => "$proxyURL?$params",
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => "",
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_SSL_VERIFYHOST => 0,
//   CURLOPT_SSL_VERIFYPEER => 0,
//   CURLOPT_TIMEOUT => 30,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => "GET",
//   CURLOPT_HTTPHEADER => $headerParams
// ));
// $response = curl_exec($curl);
// $err = curl_error($curl);
// echo $err;
// echo $response;
// ?>
