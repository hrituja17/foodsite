const db = firebase.firestore();

var notLoggedIn = document.getElementById("notLoggedIn");
var loggedIn = document.getElementById("loggedIn");

firebase.auth.Auth.Persistence.SESSION;

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        window.user = user;
        notLoggedIn.style.display = "none";
        loggedIn.style.display = "block";
    } else {
        notLoggedIn.style.display = "block";
        loggedIn.style.display = "none";
    }
});

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = "../public/logout.html"
    })
    .catch(function(error) {
        window.alert("Error:" + error);
    });
}

