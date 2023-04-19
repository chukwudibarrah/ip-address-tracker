$(document).ready(function () {

  // let success = (position) => {
  //   let lat = position.coords.latitude
  //   let long = position.coords.longitude

  //   // console.log(lat, long);

  //   let map = L.map("map").setView([lat, long], 15);
  //   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     maxZoom: 19,
  //     attribution:
  //       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   }).addTo(map);

  //   L.marker([lat, long]).addTo(map);
  // }

  // let error = () => {
  //   console.log('Unable to get location');
  // }

  // navigator.geolocation.watchPosition(success, error)
  
  function clearResults() {
    $('.result-display').empty();
  }


  $("#form").on("submit", function (e) {
    e.preventDefault(); //prevent default form behaviour
    clearResults()

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
      let newLat = response.location.lat;
      let newLong = response.location.lng;
      let timezone = response.location.timezone;
      let isp = response.isp;

      // display the results on the results bar

      $('#show-ip').append($('<p>').addClass("result-display text-lg font-medium text-[#2B2B2B] py-2").text(displayIp));
      
      $('#show-location').append($('<p>').addClass("result-display text-lg font-medium text-[#2B2B2B] py-2").text(displayCity));

      $('#show-timezone').append($('<p>').addClass("result-display text-lg font-medium text-[#2B2B2B] py-2").text(timezone));

      $('#show-isp').append($('<p>').addClass("result-display text-lg font-medium text-[#2B2B2B] py-2").text(isp));

      // pass values to the map API

      
      let map = L.map("map").setView([newLat, newLong], 17);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      L.marker([newLat, newLong]).addTo(map);
      map.panTo([newLat, newLong]);

      // pass values to and create results fields



    });

    $(".user-input").val("");
  });

});
