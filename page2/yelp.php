<?php

    $proxyURL = "https://api.yelp.com/v3/businesses/search";
    $acceptableHeaders = ['TRN-Api-Key', 'Authorization'];

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: ".implode(',', $acceptableHeaders));
    $params = '';
    foreach($_GET as $key=> $value){
      $params.= ("&$key=".urlencode($value));
    }
    $postparams = '';
    foreach($_POST as $key=> $value){
      $params.= ("&$key=".urlencode($value));
    }

    $headers = apache_request_headers();

    $curl = curl_init();
    $headerParams = [];
    foreach($headers as $key=> $value){
      if (in_array($key, $acceptableHeaders)) {
        $headerParams[] = "$key:$value";
      }
    }
    curl_setopt_array($curl, array(
      CURLOPT_URL => "$proxyURL?$params",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_SSL_VERIFYHOST => 0,
      CURLOPT_SSL_VERIFYPEER => 0,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => $headerParams
    ));
    $response = curl_exec($curl);
    $err = curl_error($curl);
    echo $err;
    echo $response;
