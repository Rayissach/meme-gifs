 var animals = ["sloth","dog","panda"];

console.log(animals.length);
//Functions loops through the Animals array
//Create a button for each elementin the animal array
// For each element we add a text to its current index
//Add button to the page
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
 	var btnText = 
 })