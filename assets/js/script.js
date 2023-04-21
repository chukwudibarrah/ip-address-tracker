$(document).ready(function () {

  // create icon for map
  let myIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowAnchor: [22, 94]
  })

  // clear results from center panel on new search
  function clearResults() {
    $(".result-display").empty();
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
      let newLat = response.location.lat;
      let newLong = response.location.lng;
      let timezone = response.location.timezone;
      let isp = response.isp;

      // display the results on the results bar
      $("#show-ip").append(
        $("<li>")
          .addClass("text-lg font-medium text-[#2B2B2B]")
          .text(displayIp)
      );

      $("#show-location").append(
        $("<li>")
          .addClass("text-lg font-medium text-[#2B2B2B]")
          .text(displayCity + ", " + region + " " + postalCode)
      );

      $("#show-timezone").append(
        $("<li>")
          .addClass("text-lg font-medium text-[#2B2B2B]")
          .text("UTC " + timezone)
      );

      $("#show-isp").append(
        $("<li>")
          .addClass("text-lg font-medium text-[#2B2B2B]")
          .text(isp)
      );

      // pass values to the map API
      let map = L.map("map", { center: [newLat, newLong], zoom: 17 });
      L.marker([newLat, newLong], {icon: myIcon}).addTo(map);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    });

    // clear the input field after search
    $(".user-input").val("");
  });

});
