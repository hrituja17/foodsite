var vendorList = document.getElementById("vendors");
 
  db.collection('tiffen_service_details').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        //tiffen_service_detailsRef.orderBy("totalCost").limit(5)
        var img = document.createElement("img");
        img.src = doc.data()["Logo Image"];
        img.classList.add("listimage");

        vendorList.innerHTML +=   "<tr><td>"
        document.getElementById("vendors").appendChild(img);

        vendorList.innerHTML += "</td><td>"+doc.data().OwnerName+"</td><td>"+doc.data().Email+
        "</td><td>"+doc.data().Phone+
        "</td><td class='text-center'></tr>"
      });
  });