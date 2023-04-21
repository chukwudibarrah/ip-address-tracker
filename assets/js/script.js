$(document).ready(function () {
  // create icon for map
  let myIcon = L.icon({
    iconUrl: "../images/icon-location.svg"
  });

  // initialise map view with generic location
  let map = L.map("map");
  map.setView([51.505, -0.09], 17);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // prompt user to access browser location
  navigator.geolocation.watchPosition(success, error);

  let marker, circle, zoomed;

  function success(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    let accuracy = pos.coords.accuracy;

    marker = L.marker([lat, long], { icon: myIcon }).addTo(map);
    circle = L.circle([lat, long], { radius: accuracy }).addTo(map);

    // remove circle from map
    if (marker) {
      map.removeLayer(circle);
    }

    // update map view to user's current location
    map.setView([lat, long]);
  }

  function error(err) {
    if (err.code === 1) {
      alert("Please allow access to your approximate location.");
    } else {
      alert("Cannot get current location.");
    }
  }

  // clear results from center panel on new search
  function clearResults() {
    $(".show-results").empty();
  }

  $("#form").on("submit", function (e) {
    e.preventDefault(); //prevent default form behaviour
    clearResults();

    // define and get user input from field
    let userInput = $(".user-input").val().trim();

    let url = "https://geo.ipify.org/api/v2/country,city?";
    let apiKey = "at_njUQWa7WFrZEhSAuwM8tYZ6n9wnYC";

    let queryURL = url + "apiKey=" + apiKey + "&ipAddress=" + userInput;

    // basic verification
    if (!userInput) {
      alert("You need to enter your IP address as numbers");
      return;
    }

    // make map api call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      let displayIp = response.ip;
      let displayCity = response.location.city;
      let region = response.location.region;
      let postalCode = response.location.postalCode;
      let lat = response.location.lat;
      let long = response.location.lng;
      let timezone = response.location.timezone;
      let isp = response.isp;

      // display the results on the results bar
      $("#show-ip").append(
        $("<li>")
          .addClass("text-lg show-results font-medium text-[#2B2B2B]")
          .text(displayIp)
      );

      $("#show-location").append(
        $("<li>")
          .addClass("text-lg show-results font-medium text-[#2B2B2B]")
          .text(displayCity + ", " + region + " " + postalCode)
      );

      $("#show-timezone").append(
        $("<li>")
          .addClass("text-lg show-results font-medium text-[#2B2B2B]")
          .text("UTC " + timezone)
      );

      $("#show-isp").append(
        $("<li>")
          .addClass("text-lg show-results font-medium text-[#2B2B2B]")
          .text(isp)
      );

      // pass values to the map API
      map.setView([lat, long]);

      // remove previous markers from map
      let marker = null;
      if (marker !== null) {
        map.removeLayer(marker);
        map.removeLayer(circle);
      }
      marker = L.marker([lat, long], { icon: myIcon }).addTo(map);
    });

    // clear the input field after search
    $(".user-input").val("");
  });
});
