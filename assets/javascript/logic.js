var tvShowsArr = ["The-Amazing World of Gumball",
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

    $(".gif-btn-class").html("");


    for (var i = 0; i < tvShowsArr.length; i++) {

        console.log(tvShowsArr[i])

        $(".gif-btn-class").append("<button class='btn-clss grow btns-hit' data-show='" + tvShowsArr[i] + "'>" + tvShowsArr[i] + "</button>");

    }

}

$("#buttonSearch").on("click", function(event) {

    event.preventDefault();

    var shows = $("#tvShowSearch").val().trim();

    tvShowsArr.push(shows);

    btnAdd();
});

btnAdd();



$(".btn-clss").on("click", function() {
    //Query url with api key
    var tvShows = $(this).attr("data-show");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tvShows +
        "&api_key=ICK0911MJ3OSyCVmYJsRtqgKZ0CzLbhW" +
        "&limit=10&rating=G"



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

            var p = $("<h2>").text("Rating: " + results[i].rating);

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

$("body").on("click", ".gif", function() {
    var src = $(this).attr("src");

    if ($(this).hasClass('playing')) {

        $(this).attr('src', src.replace(/\.gif/i, "_s.gif"))

        $(this).removeClass('playing');

    } else {

        $(this).addClass('playing');

        $(this).attr('src', src.replace(/\_s.gif/i, ".gif"))
    }
});

