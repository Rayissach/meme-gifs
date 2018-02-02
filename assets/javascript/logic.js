 var queryUrl = "http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&limit=10"




 var animals = ["sloth","dog","panda"];

console.log(animals.length);
//Functions loops through the Animals array
//Create a button for each elementin the animal array
// For each element we add a text to its current index
//Add button to the page

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {
          var results = response.data;
 function btnAdd () {
 	for (var i = 0; i < animals.length; i++) {
 		console.log(animals[i]);
 		var buttons = $("<button>");
 		buttons.addClass("btn animals")
 		buttons.text(animals[i]);
 		
 		$("#button-container").append(buttons);
 	}
 }

 btnAdd();


//grabs the text from the button clicked with a class animal.
 $(document).on("click",".animals", function(){
 	console.log($(this).text())
 	// var btnText = "";
 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
 //        .then(function(response) {
 //          var results = response.data;
 // })
