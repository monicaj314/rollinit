console.log("open.js has been opened.");



    // $.post("/users/login", user).then(function (x) {
    //     console.log('x: ', x);
    //     // if (x.response == 'this password is not correct') {
    //     //     alert('incorrect password, please try again.');
    //     //     document.getElementById('id01').style.display = 'block'
    //     // } else {
    //     //     document.getElementById('id01').style.display = 'none'
    //     //     currentUser = x[0].playerName;
    //     //     console.log('current user: ', currentUser);
    //     //     $('h5').text("Logged in as: " + currentUser);
    //     //     localStorage.setItem('currentUser', currentUser);

    //     //     currentName = x[0].playerName;
    //     //     console.log('current name: ', currentName);
    //     //     localStorage.setItem('currentName', currentName);
        
    //     //     $(".main-bar-left").html("<h5 class='current-name'>Logged in as: " + (localStorage.getItem('currentName'))+ "</h5>");
    //     //     $(".main-bar-right").html("<button class='logout-button'>Log-Out</button>");
    //     //     $('.logout-button').attr('onClick', 'logOutFunction();');
    //     //     displayScores();
    //     //     console.log("should update the main-bar")
    //     // }

    // })




$( document ).ready(function() {

	var config = {
		apiKey: "AIzaSyB6VDtff7XjXPuAlYuMZwOKNFGEzsc5DgQ",
		authDomain: "ddproj-78722.firebaseapp.com",
		databaseURL: "https://ddproj-78722.firebaseio.com",
		projectId: "ddproj-78722",
		storageBucket: "ddproj-78722.appspot.com",
		messagingSenderId: "944554149074"
	};
	firebase.initializeApp(config);

	var database = firebase.database();
	var ref = database.ref();

	// Log In Button
	$("#btnLogIn").on("click", function(){
	var email = $("#email-input").val().trim();
	var password = $("#password-input").val().trim();

	console.log("Log In clicked");

	// Sign In to FBase
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		console.log("User not registered.")
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
	});
	});


	$("#signup, .check-us").on("click", function(){
		$("#log-in, #login-tab").removeClass("active");
		$("#register, #register-tab").addClass("active");
	});

	$("#login").on("click", function(){
		$("#log-in, #login-tab").addClass("active");
		$("#register, #register-tab").removeClass("active");
	});

	// Sign Up Button 
	$("#btnSignUp").on("click", function(snap){
	var firstName = $("#new-first-name-input").val().trim();
	var lastName = $("#new-last-name-input").val().trim();
	var email = $("#new-email-input").val().trim();
	var password = $("#new-password-input").val().trim();
	console.log("sign up clicked");

	// Create and sign in the user to FBase 
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		console.log("made it to error")
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
	});
});

	// When there is a change to who is logged in
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log("User Logged-In")

			// Declaring all Variables 
			var firstName = user.firstName;
			var lastName = user.lastName;
			var email = user.email;
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			var providerData = user.providerData;

			//Removing Log-In page
			$("#btnLogOut").removeClass("hide");
			$("#main-cont").removeClass("hide");
			$("#login").css("display", "none");
			

			//Log Out Button
			$("#btnLogOut").on("click", function(){
			//User Logs Out from FBase
			firebase.auth().signOut().then(function() {
				console.log("User Logged-Out")    
			}).catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			});
			location.reload(true);
			});
		};
	});
});










