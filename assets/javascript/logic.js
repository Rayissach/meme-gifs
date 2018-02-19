// function btnArr() {
$(".btns-hit").on("click", function btnArr() {
    //Query url with api key
    var tvShows = $(this).attr("data-show");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tvShows +
        "&api_key=ICK0911MJ3OSyCVmYJsRtqgKZ0CzLbhW" +
        "&limit=10&rating=G"
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
        "American Dad"
    ];


       function btnAdd() {


            for (var i = 0; i < tvShowsArr.length; i++) {
                var buttons = $("<button>");

                buttons.addClass("btn-clss")

                buttons.text(tvShowsArr[i]);

                $(".gif-btn-class").append(tvShowsArr[i]);
            };
        };

        $("#btn-search").on("click", function(event) {

            event.preventDefault();

            var shows = $("#tvShowSearch").val();

            tvShowsArr[i].push(shows);

            btnAdd();
            console.log("hello")
        });

         btnAdd();

    

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

            var tvImage = $("<img>");

            console.log(results[i]);

            tvImage.attr("src", results[i].images.fixed_height.url);

            tvImage.attr("data-animate", results[i].images.fixed_height.url);

            tvImage.attr("data-still", results[i].images.fixed_height_still.url);

            tvImage.attr("data-state", "still");

            tvImage.addClass("gif");

            showDiv.append(p);
            showDiv.append(tvImage);

            $("#gif-content").prepend(showDiv);
        };
        ////////////////////////////////////////

        ///////////////////////////////////////////
    });
});


// $("#btn-primary").on("click", function btnAdd(event) {
//     event.preventDefault();

//     console.log("event");

//     searchShow = $("#tvShowSearch1").val().trim();

//     var gifItem = $("<button>");

//     gifItem.attr("id", "tv-btn-" + showCount);
//     gifItem.append(" " + searchShow);

//     showCount++;
//     var searchURL = queryURL + searchTerm;

//     console.log("add name");

//     btnAdd.push(gifItem);
// });

// });

// function btnAdd() {
//   btnArr();

//   $("#tvShowSearch1").html("");

//   for (var i = 0; i < tvShowsArr.length; i++) {

//     console.log(tvShowsArr[i]);

//     $("#button-container").append("<button class='userMeme' data-meme='" + tvShowsArr[i] +"'>" + tvShowsArr[i] + "</button>");
//   }

// };
// btnAdd();

// $("#btn-search").on("click", function(event) {

//   event.preventDefault();

//   var show = $("#tvShowSearch1").val();

//   show.push(show);

//   btnAdd();
// });

// btnAdd();