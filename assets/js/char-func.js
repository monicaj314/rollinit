

$(document).ready(function() {

    console.log("/characters/all activated")
    $.getJSON("/characters/all", function(req, res) {
        if(req.characters.length>0){
            $("#current-char").empty();
            var charArray = req.characters;
            for (var i = 0; i< charArray.length; i++){
                $("#current-char").append("<div data-id='" + charArray[i]._id + "'>" 
                + "<h4 class='char-name'>Name: " + charArray[i].name + "</h4>" 
                + "<h5 class='char-level'>Level: " + charArray[i].level + "</h5>"
                + "<h5 class='char-age char-age" + charArray[i]._id +" hide'>Age: " + charArray[i].age + "</h5>"
                + "<h5 class='char-gender char-gender" + charArray[i]._id +" hide'>Gender: " + charArray[i].gender + "</h5>"
                + "<h5 class='char-race char-race" + charArray[i]._id +" hide'>Race: " + charArray[i].race + "</h5>"
                + "<h5 class='char-className char-className" + charArray[i]._id +" hide'>Class: " + charArray[i].className + "</h5>"
                + "<h5 class='char-background char-background" + charArray[i]._id +" hide'>Background: " + charArray[i].background + "</h5>"
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
});

$(document).on("click", ".expand-char", function() {
    console.log("expanded clicked")
    var thisId = $(this).attr("data-id");
    console.log("thisId");
    console.log(thisId);
    $(".char-age"+thisId).removeClass("hide");
    $(".char-race"+thisId).removeClass("hide");
    $(".char-className"+thisId).removeClass("hide");
    $(".char-background"+thisId).removeClass("hide");
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
    $(".char-className"+thisId).addClass("hide");
    $(".char-background"+thisId).addClass("hide");
    $(".char-gender"+thisId).addClass("hide");
    $(".close-char"+thisId).addClass("hide");
    $(".expand-char"+thisId).removeClass("hide");
});

$(document).on("click", ".delete-char", function() {

  
  var thisId = $(this).attr("data-id");
  console.log("thisId");
  console.log(thisId);
  $.ajax({
    method: "GET",
    url: "/characters/delete/" + thisId
  })
    .done(function(data) {
       location.reload();
    });
});
