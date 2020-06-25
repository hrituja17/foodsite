const db = firebase.firestore();

var adminName = document.getElementById("admin-name");
var adminContact = document.getElementById("admin-contact");
var adminEmail = document.getElementById("admin-email");
var upperName = document.getElementById("upper-name");

db.collection("admin").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        adminName.innerHTML += "<h5>" + doc.data().name + "</h5>";
        adminContact.innerHTML += "<h5>" + doc.data().contact + "</h5>";
        adminEmail.innerHTML += "<h5>" + doc.data().email + "</h5>";
        upperName.innerHTML += doc.data().name;
    });
});



function editProfile() {
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("change").value;

    var existingName = "";
    var existingContact = "";
    var existingEmail = "";
    var existingPassword = "";
    
    var profileImage = document.getElementById("prof").files[0];
    var profileImageName = profileImage.name;

    var storageRef = firebase.storage().ref('profileImage/' + profileImageName);
    
    var uploadTask = storageRef.put(profileImage);
    

    uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    console.log("Upload is " + progress + "% done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            var url = downloadURL;

            db.collection("admin").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc){
                    
                    existingName = doc.data().name;
                    existingContact = doc.data().contact;
                    existingEmail = doc.data().email;
                    existingPassword = doc.data().password;

                    var newName = "";
                    var newContact = "";
                    var newEmail = "";
                    var newPassword = "";

                    if(name == ""){
                        newName = existingName;
                    } else {
                        newName = name;
                    }
                                
                    if(contact == ""){
                        newContact = existingContact;
                    } else {
                        newContact = contact;
                    }
                
                    if(email == ""){
                        newEmail =  existingEmail;
                    } else {
                        newEmail = email;
                    }

                    console.log(newEmail);

                    if(pwd == ""){
                        newPassword = existingPassword;
                    } else {
                        newPassword = pwd;
                    }

                    db.collection("admin").doc("IcqQwevv3q0h6adWppYo").update({
                        name: newName,
                        contact: newContact,
                        email: newEmail,
                        password: newPassword,
                        image: url
                    })
                    .then(function(){
                        window.alert("Update successful");
                    })
                    .catch(err => window.alert("Error: " + err.message));
                });
            }); 
            
        });
    });
    setTimeout(() => {location.reload();}, 3000);
}