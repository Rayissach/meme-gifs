//When button clicked start this function

//Theme TV Shows:
  //The Amazing World of Gumball
  //Grim Adventures of Billy and Mandy
  //Spongebob
  //Teen Titans
  //Teen Titans Go
  //Adventure Time
  //The Marvelous Misadventures of Flapjack
  //Chowder
  //Dexter's Laboratoy
  //Regular Show
  //Code Name Kids Next Door
  //Samuri Jack
  //Dragon Ball Z
  //Naruto
  //Family Guy
  //American Dad

$("button").on("click", function() {
  //Query url with api key

  var buttonArr = []
  var tvShowsArr = ["The-Amazing-World-of-Gumball",
  "Grim Adventures of Billy and Mandy",
  "Spongebob",
  "Teen Titans",
 "Teen Titans Go",
  "Adventure Time",
  "The Marvelous Misadventures of Flapjack",
  "Chowder",
  "Dexter's Laboratoy",
  "Regular Show",
  "Code Name Kids Next Door",
  "Samurai Jack",
  "Dragon Ball Z",
  "Naruto",
  "Family Guy",
  "American Dad"]

  var tvShows = $(this).attr("data-show");
 
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" 
  +  tvShows
  + "&api_key=ICK0911MJ3OSyCVmYJsRtqgKZ0CzLbhW"
    
    + "&limit=10&rating=G"

    

   console.log(tvShowsArr);
   console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      var showDiv = $("<div>")

      var p = $("<p>").text("Rating: " + results[i].rating);

      var tvImage = $("<img>")
      console.log(results[i]);

      tvImage.attr("src", results[i].images.fixed_height_still.url);

      showDiv.append(p);
      showDiv.append(tvImage);

      $("#gif-content").prepend(showDiv);
    }

    function btnAdd() {

      for (var i = 0; i < tvShowsArr.length; i++) {

        var buttons = $("<button>");

        buttons.addClass("btn-clss")

        buttons.text(tvShowsArr);

        $("#button-container").append(buttons);
      };

      btnAdd ();

      
    }

  });



//   $("btn-clss").on("click", function() {

//     var dataState = 

//     var state = $(this).attr("data-state");

//     if (state === "still") {
//         $(this).attr("src", results[i].images.fixed_height_still.url);
//         $(this).attr("data-state", "animate");
//       } else {
//         $(this).attr("src", results[i].images.fixed_height.url);
//         $(this).attr("data-state", "still");
//       }
// });

////////////////////////////////////////////////
    // for (var i = 0; i < response.data.length; i++) {
    //   buttonArr.push(response.data[i].images.original.url);
//////////////////////////////////////////////

      // var gifObj = imageObj[i]["images"];
      // var imageObj = response.data[i].images.original.url;

       // for (var j = 0; j < gifObj.length; j++) {
       //   console.log(gifObj[j].original.url);
       // }
      // for (var j = 0; j < gifObj.length; j++) {

      //  buttonArr.push(gifObj[j].original.url);
      // }
      // console.log(imageObj[i]);
///////////////////////////////////////////////////

//     };
    
// console.log(buttonArr);



   

  //   for (var i = 0; i < buttonArr.length; i++) {
  //      var imageUrl = $("<img>");

  //   imageUrl.attr("src", buttonArr[i]);

  //   $("#button-container").append(imageUrl);

  //   }
  //   }
  // });

///////////////////////////////////////
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
 // 	for (var i = 0; i < animals.length; i++) {
 // 		console.log(animals[i]);
 // 		var buttons = $("<button>");
 // 		buttons.addClass("btn gifs")
 // 		buttons.text(animals[i]);
 		
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

});