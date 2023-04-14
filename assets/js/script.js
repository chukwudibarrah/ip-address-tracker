$(document).ready(function () {

  let map = L.map("map").setView([51.505, -0.09], 17);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // get default user location

  let success = (position) => {
    let lat = position.coords.latitude
    let long = position.coords.longitude

    console.log(lat, long);

    L.marker([lat, long]).addTo(map)
  }

  let error = () => {
    console.log('Unable to get location');
  }

  navigator.geolocation.watchPosition(success, error)


  


  $("#form").on("submit", function (e) {
    e.preventDefault(); //prevent default form behaviour

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

    console.log("The user input is", userInput);

    // make map api call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      let displayIp = response.ip;
      let displayCity = response.location.city;
      let lat = response.location.lat;
      let long = response.location.lng;
      let timezone = response.location.timezone;
      let isp = response.isp;
      console.log("The city is", displayCity);
      let map = L.map("map").setView([lat, long], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    });

    $(".user-input").val("");
  });

});
