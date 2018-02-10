//When button clicked start this function
// $("#button-container").on("click", function() {
  //Query url with api key
  var buttonArr = []
 
  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=ICK0911MJ3OSyCVmYJsRtqgKZ0CzLbhW&limit=10&rating=G"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.data[0].images.original.url);

    for (var i = 0; i < response.length; i++) {
      var gif = (response[i].url);
    }

    var imageUrl = $("<img>");

    imageUrl.attr("src", gif);

    $("#button-container").append(imageUrl);
  });


// });

  // $("button").on("click", function() {
  //     // Grabbing and storing the data-animal property value from the button
  //     var wolrdStar = $(this).attr("button-container");

  //     // Constructing a queryURL using the animal name
  //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  //       wolrdStar + "&api_key=dc6zaTOxFJmzC";

  //     $.ajax({
  //         url: queryURL,
  //         method: "GET"
  //       })
  //       .then(function(response) {
  //         console.log(queryURL);

  //         console.log(response);
  //         var results = response.data;

  //         // Looping through each result item

  //         for (var i = 0; i < results.length; i++) {

  //           // Creating and storing a div tag
  //           var gifDiv = $("<div>");

  //           // Creating a paragraph tag with the result item's rating
  //           console.log(results[i])
  //           var restrict = $("<p>").text("Rating: " + results[i].rating);

  //           // Creating and storing an image tag
  //           var WorldStarImage = $("<img>");
  //           // Setting the src attribute of the image to a property pulled off the result item
  //           WorldStarImage.attr("src", results[i].images.fixed_height.url);

  //           // Appending the paragraph and image tag to the animalDiv
  //           animalDiv.append(p);
  //           animalDiv.append(animalImage);

  //           // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
  //           $("#gif-content").prepend(animalDiv);
  //         }
  //       });
  //   });
  


 // var queryUrl = "http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&limit=10"

//  var animals = ["sloth","dog","panda"];

// console.log(animals.length);
//Functions loops through the Animals array
//Create a button for each elementin the animal array
// For each element we add a text to its current index
//Add button to the page

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         person + "&api_key=dc6zaTOxFJmzC&limit=10";

//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         .then(function(response) {
//           var results = response.data;
 // function btnAdd () {
 // 	for (var i = 0; i < wolrdStar.length; i++) {
 // 		console.log(wolrdStar[i]);
 // 		var buttons = $("<button>");
 // 		buttons.addClass("btn gifs")
 // 		buttons.text(wolrdStar[i]);
 		
 // 		$("#button-container").append(buttons);
 // 	}
 // }

 // btnAdd();


// //grabs the text from the button clicked with a class animal.
//  $(document).on("click",".animals", function(){
//  	console.log($(this).text())
 	// var btnText = "";
 	// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  //       person + "&api_key=dc6zaTOxFJmzC&limit=10";

  //     $.ajax({
  //         url: queryURL,
  //         method: "GET"
  //       })
 //        .then(function(response) {
 //          var results = response.data;
 // })
