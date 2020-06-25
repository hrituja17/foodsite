var db = firebase.firestore();
var noti = document.getElementById("notify");
db.collection('subscription_notification').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        if(doc.data().status==='pending'){
      noti.innerHTML += "<a data-toggle='modal' data-target='#notModal'>"+doc.data().vendorEmail+"</a>"
        }
    });
  
});