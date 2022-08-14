//Method to access individual fields inside the person.JSON file

//if you use person.JSON inside require("") it throws error
//var myJSON = JSON.stringify(myObj) - not required since myObj itself works
//The previous step gets from JSON file and stores as JavaScript file
//whereas myJSON=JSON.stringify step converts the Javascript object(myObj) to a string
//since in the next step, the JSON.parse() takes only text/strings as input and not objects
//Hence we cannot pass myObj into JSON.parse(). We need to first stringify it to myJSON 
//var myParse = JSON.parse(myJSON) - not required since myObj itself works
//console.log("JSON string name "+ myParse.Name)
var myObj = require("./person") 
console.log(myObj)
console.log(myObj.Name)
console.log(myObj.address.zip)
