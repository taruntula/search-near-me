class Location {
  constructor(elementConfig){
    this.elementConfig = elementConfig;
    this.data = {};
  }
  getLocation () {

    var ajaxConfigObject = {
      dataType: 'json',
      url: 'http://api.ipstack.com/174.76.22.227?access_key=1a1994f66f98738ef0680c97975ec64c',
      method: 'Get',
      data: {
        api_key: '1a1994f66f98738ef0680c97975ec64c',

      },
      success: function(response){
          console.log('response ', response)
      }
      error: function(response){
        console.log('response ', response)
      }
    }



    $.ajax(ajaxConfigObject);

  }












}
