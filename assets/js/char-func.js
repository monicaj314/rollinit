

$(document).ready(function() {

    console.log("/characters/all activiated")
    $.getJSON("/characters/all", function(req, res) {
        if(req.characters.length>0){
            // console.log("req.characters");
            // console.log(req.characters);
            $("#current-char").empty();
            var charArray = req.characters;
            for (var i = 0; i< charArray.length; i++){
                $("#current-char").append("<div data-id='" + charArray[i]._id + "'>" 
                + "<h4 class='char-name'>Name: " + charArray[i].name + "</h4>" 
                + "<h5 class='char-level'>Level: " + charArray[i].level + "</h5>"
                + "<h5 class='char-age char-age" + charArray[i]._id +" hide'>Age: " + charArray[i].age + "</h5>"
                + "<h5 class='char-gender char-gender" + charArray[i]._id +" hide'>Gender: " + charArray[i].gender + "</h5>"
                + "<h5 class='char-race char-race" + charArray[i]._id +" hide'>Race: " + charArray[i].race + "</h5>"
                +"<button data-id='" + charArray[i]._id + "' class='expand-char expand-char" + charArray[i]._id +"'>Expand</button> "
                +"<button data-id='" + charArray[i]._id + "' class='close-char close-char" + charArray[i]._id +" hide'>Close</button> "
                +"<button data-id='" + charArray[i]._id + "' class='delete-char'>Delete</button>"
                + "</div>");
                console.log(i);
                console.log("charArray[i]");
                console.log(charArray[i]);
            }
        }
    });
    // $.getJSON("/scrape", function(data) {
    //     // For each one
    //     for (var i = 0; i < data.length; i++) {
    //         $("articles").empty();
    //         // Display the apropos information on the page
    //         $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    //         // A button to save a new article, with the id of the article saved to it
    //     $("#articles").append("<button data-id='" + data[i]._id + "' id='savearticle'>Save Article</button>");
    //     }
    // });
});

$(document).on("click", ".expand-char", function() {
    console.log("expanded clicked")
    var thisId = $(this).attr("data-id");
    console.log("thisId");
    console.log(thisId);
    $(".char-age"+thisId).removeClass("hide");
    $(".char-race"+thisId).removeClass("hide");
    $(".char-gender"+thisId).removeClass("hide");
    $(".close-char"+thisId).removeClass("hide");
    $(".expand-char"+thisId).addClass("hide");
});

$(document).on("click", ".close-char", function() {
    console.log("close clicked")
    var thisId = $(this).attr("data-id");
    console.log("thisId");
    console.log(thisId);
    $(".char-age"+thisId).addClass("hide");
    $(".char-race"+thisId).addClass("hide");
    $(".char-gender"+thisId).addClass("hide");
    $(".close-char"+thisId).addClass("hide");
    $(".expand-char"+thisId).removeClass("hide");
});

$(document).on("click", ".delete-char", function() {
  // Grab the id associated with the article from the submit button
  
  var thisId = $(this).attr("data-id");
  console.log("thisId");
  console.log(thisId);
  $.ajax({
    method: "GET",
    url: "/characters/delete/" + thisId
  })
    // With that done, add the comment information to the page
    .done(function(data) {
        console.log("data");
        console.log(data);
    });
});

// // When you click the savearticle button
// $(document).on("click", "#savearticle", function() {
//   // Grab the id associated with the article from the submit button
  
//   var thisId = $(this).attr("data-id");
//   console.log("thisId");
//   console.log(thisId);
//   $.ajax({
//     method: "POST",
//     url: "/articles/" + thisId
//   })
//     // With that done, add the comment information to the page
//     .done(function(data) {
//         console.log("data");
//         console.log(data);
//     });
// });

// // When you click the savearticle button
// $(document).on("click", ".deletearticle", function() {
//   // Grab the id associated with the article from the submit button
  
//   var thisId = $(this).attr("data-id");
//   console.log("thisId");
//   console.log(thisId);
//   $.ajax({
//     method: "GET",
//     url: "/delete/" + thisId
//   })
//     // With that done, add the comment information to the page
//     .done(function(data) {
//         console.log("data");
//         console.log(data);
//     });
// });



// // Whenever someone clicks a p tag
// $(document).on("click", "p", function() {
//   // Empty the comments from the comment section
//   $("#comments").empty();
//   // Save the id from the p tag
//   var thisId = $(this).attr("data-id");

//   // Now make an ajax call for the Article
//   $.ajax({
//     method: "GET",
//     url: "/comments/" + thisId
//   })
//     // With that done, add the comment information to the page
//     .done(function(data) {
//       console.log(data);
//       // The title of the article
//       $("#comments").append("<h2>" + data.comments.title + "</h2>");
//       // An input to enter a new title
//       $("#comments").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new comment body
//       $("#comments").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new comment, with the id of the article saved to it
//       $("#comments").append("<button data-id='" + data._id + "' id='savecomment'>Save Comment</button>");

//       // If there's a comment in the article
//       if (data.comment) {
//         // Place the title of the comment in the title input
//         $("#titleinput").val(data.comment.title);
//         // Place the body of the comment in the body textarea
//         $("#bodyinput").val(data.comment.body);
//       }
//     });
// });


// // When you click the savecomment button
// $(document).on("click", ".add-comment-btn", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");

//   // Run a POST request to change the comment, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/comments/" + thisId,
//     data: {
//       // Value taken from title input
//       title: $("#titleinput-"+thisId).val(),
//       // Value taken from comment textarea
//       body: $("#bodyinput-"+thisId).val()
//     }
//   })
//     // With that done
//     .done(function(data) {
//       // Log the response
//       console.log(data);
//       // Empty the comments section
//     });

// });

// When you click the savearticle button
