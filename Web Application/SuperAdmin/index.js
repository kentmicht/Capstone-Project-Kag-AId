//This function determines if a use is currently logged in or not.
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
    document.getElementById("user-div").style.display = "inherit";
    document.getElementById("login-div").style.display = "none";

    var user = firebase.auth().currentUser;
    if (user != null){
    	var email_id = user.email;
    	document.getElementById("logged_in_email").innerHTML = "Welcome " + email_id ;
    }

  } else {

  	document.getElementById("user-div").style.display = "none";
    document.getElementById("login-div").style.display = "inherit";

  }
});

//This function logs in the super admin to the system. This will accept a valid email and valid password 
//which should also be found in the firebase authorization list. 
function login(){

	var userEmail = document.getElementById("email_field").value;
	var userPass = document.getElementById("password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  window.alert("Error : " + errorMessage);
	  // ...
	});
}

//This function adds a user (a medical practitioner). It accepts 

function logout(){

  document.getElementById("email_field").innerHTML = " ";
  document.getElementById("password_field").innerHTML = " ";
  firebase.auth().signOut();
}


