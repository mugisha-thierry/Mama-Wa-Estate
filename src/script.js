// method to get user's location
var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
// Method to display the results using static image

function showPosition(position) {
      var latlon = position.coords.latitude + "," + position.coords.longitude;
    
      var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
    
       "+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyAgBh9gsaBhoWFVUgdpc7i7jXBfR3ONuGs";
    
    
       document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    
     }
    //  Function for handling errors and and rejection
    function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
          case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
          case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
          case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
        }
      }