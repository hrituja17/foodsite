function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

let table = document.querySelector("table");
let data = Object.keys(vendors[0]);
generateTableHead(table, data);
generateTable(table, vendors);

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