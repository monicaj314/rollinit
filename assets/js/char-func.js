

$(document).ready(function() {
    console.log( "ready!" );

    console.log("/characters/all activiated")
    $.getJSON("/characters/all", function(req, res) {
        console.log("req");
        console.log(req);
        console.log("res");
        console.log(res);
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

$(document).on("click", ".deletecomment", function() {
  // Grab the id associated with the article from the submit button
  
  var thisId = $(this).attr("data-id");
  console.log("thisId");
  console.log(thisId);
  $.ajax({
    method: "GET",
    url: "/deletecomment/" + thisId
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
