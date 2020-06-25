const db = firebase.firestore();
var totalearning = 0;
var total =0;
var orders=0;
var vendors =0;
var users = 0;
var vendor=0;
   
   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
        totalearning += doc.data().totalCost;
        });
       earning.innerHTML += "<h3>" + totalearning + "</h3>";
    });


  
    db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    
        querySnapshot.forEach(function(doc) {
            total += doc.data().totalCost;
        });
        earnings.innerHTML += "<h3>" + total + "</h3>";
    });

    
    
    db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            vendors ++;
        });
        totalvendors.innerHTML += "<h3>" + vendors + "</h3>";
    });


   db.collection("customer_collection").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            users++;
         });
         totalusers.innerHTML += "<h3>" + users + "</h3>";
   });

   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            orders++;
          });
        totalorders.innerHTML += "<h3>" + orders + "</h3>";
    });
    
    db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
         querySnapshot.forEach(function(doc){
           vendor ++;
        });
         totalvendor.innerHTML += "<h3>" + vendor + "</h3>";
    });



function getuser(){
  document.getElementById("users").style.display = "none";
  //document.getElementById("susers").style.display = "none";
  var user=document.getElementById("uname").value;
  console.log(user);
  var susersList = document.getElementById("susers");
  db.collection('customer_collection')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      document.getElementById("susers").style.display = "block";
      if(doc.data().name===user){
        susersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
      }
    });
});
//document.getElementById("users").style.display = "block";
}
var usersList = document.getElementById("users");
document.getElementById("susers").style.display = "none";
document.getElementById("users").style.display = "block";
db.collection('customer_collection').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        usersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
    });
});

/*function getaddr(id) {
  console.log("executed");
  return db.collection('tiffen_service_details/'+id+'/')
  .once('value')
    .then(function(bref) {
      console.log(bref.data());
       var add=bref.data().Address;
       console.log(add);
        return {add};
});
}*/
function getvendor(){
  document.getElementById("vendors").style.display = "none";
  //document.getElementById("susers").style.display = "none";
  document.getElementById("svendors").style.display = "block";
  var user=document.getElementById("name").value;
  var svendorsList = document.getElementById("svendors");
  db.collection('vendor_collection/vendors/registered_vendors/')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      if(doc.data().Name===user){
        svendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +doc.data().Phone+"</p></div>"
      }
    });
});
//document.getElementById("users").style.display = "block";
}


var vendorsList = document.getElementById("vendors");
document.getElementById("svendors").style.display = "none";
document.getElementById("vendors").style.display = "block";
db.collection('vendor_collection/vendors/registered_vendors/').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      //console.log(doc.data());
      //var addr=getaddr(doc.data().Email)
      //console.log(addr);
      vendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +doc.data().Phone+"</p></div>"
    });
    //console.log("completed");
});









