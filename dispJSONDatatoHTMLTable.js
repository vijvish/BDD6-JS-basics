/*function getTableData(){
const fs = require('./dispJSONDatatoHTMLTable');
console.log(fs);
var table = document.createElement("table"), row, cellA, cellB,cellC,cellD,cellE;
  document.querySelector("#data-output").appendChild(table);
  for (let i=0; i<fs.length; i++) {
    // (C2) ROWS & CELLS
    row = table.insertRow();
    cellA = row.insertCell();
    cellB = row.insertCell();
    cellC = row.insertCell();
    cellD = row.insertCell();
    cellE = row.insertCell();
 
    // (C3) KEY & VALUE
    cellA.innerHTML = fs.fruits[i].fruitImage;
    cellB.innerHTML = fs.fruits[i].fruitName;
    cellC.innerHTML = fs.fruits[i].fruitDescription;
    cellD.innerHTML = fs.fruits[i].fruitopenedDate;
    cellE.innerHTML = fs.fruits[i].fruitCode;
  };
}
/*fetch("dispJSONDatatoHTMLTable.json")   
.then(response => rensponse.json())
.then(data => {
  console.log(data);
  var table = document.createElement("table"), row, cellA, cellB,cellC,cellD,cellE;
  document.querySelector("#data-output").appendChild(table);
  for (let i=0; i<data.length; i++) {
    // (C2) ROWS & CELLS
    row = table.insertRow();
    cellA = row.insertCell();
    cellB = row.insertCell();
    cellC = row.insertCell();
    cellD = row.insertCell();
    cellE = row.insertCell();
 
    // (C3) KEY & VALUE
    cellA.innerHTML = data.fruits[i].fruitImage;
    cellB.innerHTML = data.fruits[i].fruitName;
    cellC.innerHTML = data.fruits[i].fruitDescription;
    cellD.innerHTML = data.fruits[i].fruitopenedDate;
    cellE.innerHTML = data.fruits[i].fruitCode;
  };
})
}*/
    var getTable = require("./dispJSONDatatoHTMLTable.json")
    let x=[];
    for(let i=0; i<getTable.fruits.length; i++){
    // document.getElementById("demo").innerHTML =  out[i];  
    //console.log(getTable.fruits[i].fruitImage);
    x[i]=getTable.fruits[i].fruitName;
    //console.log(getTable.fruits[i].fruitDescription);
    //console.log(getTable.fruits[i].fruitopenedDate);
    //console.log(getTable.fruits[i].fruitCode);
     }
     console.log(x);
     document.getElementById("data-output").innerHTML="data from js is " + x;
     
    
  /*  var table = document.createElement("table"), row, cellA, cellB,cellC,cellD,cellE;
  //document.getElementById("data-output").appendChild(table);
  for (let key in getTable) {
    // (C2) ROWS & CELLS
    row = table.insertRow();
    cellA = row.insertCell();
    cellB = row.insertCell();
    cellC = row.insertCell();
    cellD = row.insertCell();
    cellE = row.insertCell();
 
    // (C3) KEY & VALUE
    cellA.innerHTML = getTable.fruits[i].fruitImage;
    cellB.innerHTML = getTable.fruits[i].fruitName;
    cellC.innerHTML = getTable.fruits[i].fruitDescription;
    cellD.innerHTML = getTable.fruits[i].fruitopenedDate;
    cellE.innerHTML = getTable.fruits[i].fruitCode;*/
    //let out="";
  
  
//}
  //document.getElementById("data-output").innerHTML = out;

  /* out[i] += `
       <tr>
         <td><img src='${getTable.fruits[i].fruitImage}'></td>
         <td>${getTable.fruits[i].fruitName}</td>
         <td>${getTable.fruits[i].fruitDescription}</td>
         <td>${getTable.fruits[i].openedDate}</td>
         <td>${getTable.fruits[i].fruitCode}</td>
       </tr>
    `;
    */