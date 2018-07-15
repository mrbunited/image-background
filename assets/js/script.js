$(".btn").on("click", function (event) {
  event.preventDefault();
  var searchQ = $("#searchInput").val().trim();
  console.log("Searched: " + searchQ);


// Weather API
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQ + "&units=imperial&appid=17d594f0d627f8656d2fab0b960e2a20";

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      //   $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      //   $(".wind").text("Wind Speed: " + response.wind.speed);
      //   $(".humidity").text("Humidity: " + response.main.humidity);
      //   $(".temp").text("Temperature (F) " + response.main.temp);
      // var windSpeedAndDeg = JSON.parse(response.wind)
      // console.log(windSpeedAndDeg);
      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });


    // databse strats here

    // should line 41 through 57 go outside of the function
    var config = {
      apiKey: "AIzaSyBSdWpqiH_gXzQgtkTDdAHIoHtjiuPvGzY",
      authDomain: "project-1-d1341.firebaseapp.com",
      databaseURL: "https://project-1-d1341.firebaseio.com",
      projectId: "project-1-d1341",
      storageBucket: "project-1-d1341.appspot.com",
      messagingSenderId: "331753058972"
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    console.log(database);

    var dataInputCity = "";


    dataInputCity = $("#searchInput").val().trim();
    

    var valid = (dataInputCity.search(/^[A-Za-z]+$/) != -1) &&
        
    console.log(valid);
    if (valid == false || dataInputCity < 0) {
        alert("Wrong input");
    }
    else {
        // Change what is saved in firebase, only save if the input is correct
        database.ref().push({
            dataInputCity: dataInputCity,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
     }

    var imageURL = "https://pixabay.com/api/?key=9553787-ed488c9c5fa27a900f35fb4af&q=city+"+ searchQ +"&image_type=photo&safesearch=true&min_width=2000&min_height=1335";

    $.ajax({
      url: imageURL,
      method: "GET"
    })

      .then(function (responseImage) {
        console.log(imageURL);
        console.log(responseImage.hits[0].largeImageURL);
        $('body').css('background-image','url(' + responseImage.hits[0].largeImageURL + ')');
      });


















































































































































































































})


