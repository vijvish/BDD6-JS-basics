//In case of JSON file being an array of objects, to access an object inside a JS
var myObj2 = require("./employee")
for (let i=0; i<myObj2.employees.length;i++){
    console.log("Employee: " + i)
    console.log("Firstname: " + myObj2.employees[i].firstName)
    console.log("Lastname: " + myObj2.employees[i].lastName)
} 
