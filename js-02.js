//Assignment 08/10/22
console.log('_______________________________________________________________');
console.log('Assignment 08/10');
console.log('_______________________________________________________________');

//1. Function to return the number of characters in a string
let x='Sample string';
function retStrLength(x) {
    return x.length;
};
console.log('1. To Return the number of characters in a string');
console.log('The string is: '+ x);
console.log('The number of characters in the string is: '+ retStrLength(x));
console.log('_______________________________________________________________');

//2.Function to accept 2 numbers and return the largest
console.log('2. To accept two numbers and return the largest');
function findLargest(x,y){
    if (x>y){
    z=x;
}else {
    z=y;
};
return z;
};
console.log('The 2 given numbers are 35 and 70');
console.log('The largest of the two is: '+findLargest(35,70));
console.log('_______________________________________________________________');

//3. Function to return a Boolean flag if a number is betwwen 5000 and 9999
console.log('3. To Return a boolean flag if a number is between 5000&9999');
console.log('If a number is between 5000 and 9999, the boolean value returned will be true, else flag is false');
let booleanFlag=false;
let flagNum = 7399;
if(flagNum > 5000 && flagNum < 9999) {
    booleanFlag=true;
};
console.log('For the given number: '+ flagNum +' the boolean flag is: '+booleanFlag);
console.log('_______________________________________________________________');

//4. Function to find cube root of a number
console.log('4. Cube root of a given number');
function cbRtusingMathFn(a){
    a= Math.cbrt(a);
    return a;
};
console.log('For the number 64, the cube root of 64 is: ' + cbRtusingMathFn(64));
console.log('_______________________________________________________________');

//5. Function to convert inches to Feet
let inches = 63;
function toFeet(inches) {
    return inches/12;
}
console.log('5. To Convert inches to Feet');
console.log('Given inches: '+ inches + ' in');
console.log('Equal to: '+ toFeet(inches) +' ft');
console.log('_______________________________________________________________');

//6. Function to convert degrees to Farenheit
var c=180;
function toFahrenheit(x) {
    return ((x * 9/5) + 32);
};
console.log('6. To Convert degrees to Farenheit');
console.log('180 degrees is equal to: ' + toFahrenheit(c) + ' Fahrenheit');
console.log('_______________________________________________________________');

//7. Function to convert kg to lb and vice-versa
var kg=50;
var lb;
function toLb(kg) {
    lb = kg * 2.2;
    return lb;
};
function tokg(lb){
    kg = lb / 2.2;
    return kg;
};
console.log("7. To convert kg to lb and vice-versa");
console.log("Given kilograms: "+kg + " kg");
console.log("Equal to: "+toLb(kg)+" lb");
console.log('');
console.log("Given Pounds: "+ lb + " lb");
console.log("Equal to: "+tokg(lb)+" kg");
console.log('_______________________________________________________________');

//8. Create a json file that has a list of atleast 10 states of USA with atleast 8 properties.
console.log('8. To Create JSON file to list any 10 states of USA with atleast 8 properties');
console.log('');
var myObj = require('./listStatesOfUSA');
for (let i=0; i<myObj.States.length;i++){
    console.log('Details of State '+ (i+1) +' : ');
    console.log('Name of the State: ' + myObj.States[i].state);
    console.log('Capital City: ' + myObj.States[i].Capital);
    console.log('Location: ' + myObj.States[i].geoLocation);
    console.log('Famous Attraction: ' + myObj.States[i].Attraction);
    console.log('Governor of State: ' + myObj.States[i].Governor);
    console.log('State Animal: ' + myObj.States[i].stateAnimal);
    console.log('State Bird: ' + myObj.States[i].stateBird);
    console.log('Famous Personality from this state: ' + myObj.States[i].famousPeople);
    console.log('');
} ;
console.log('_______________________________________________________________');



//9. Create a javascript object or JSON object for cricket team with details about team and its players.
console.log('9. To Create JSON object for a cricket team with details about team and its players');
console.log('');
var myObj = require('./CricketTeam');
console.log('Name of the cricket Team: ' + myObj.Name);
console.log('Country: ' + myObj.Country);
console.log('Team Ranking: ' + myObj.TeamRanking);
console.log('Name of the cricket Team: ' + myObj.WorldCupsWon);
console.log('Name of the cricket Team: ' + myObj.Captain);
console.log('Name of the cricket Team: ' + myObj.ViceCaptain);
console.log('');
for (let i=0; i<myObj.Players.length;i++){
    console.log('Details of Player '+ (i+1) + ' : ');
    console.log('Name: ' + myObj.Players[i].firstName + ' ' + myObj.Players[i].lastName);
    console.log('Age: ' + myObj.Players[i].Age);
    console.log('Top Skill: ' + myObj.Players[i].TopSkill);
    console.log('Batting Position: ' + myObj.Players[i].BattingPosition);
    console.log('No. of Runs: ' + myObj.Players[i].maxRuns);
    console.log('');
} ;
console.log('_______________________________________________________________');

//10. Function to return the largest string when 2 strings are given as parameters 
console.log('10. To return the largest of the 2 strings');
console.log('The given 2 strings are 1st String: Florida and 2nd string: New Hampshire');
function findLargestStr(string1, string2) {
let x ='';
     if (string1.length>string2.length){
        x=string1;
     }else {
        x=string2;
     };
return x;
};
console.log('The largest string is: '+findLargestStr('Florida','New Hampshire'));
console.log('_______________________________________________________________');

//11. Function to return the string of shortest length in a Array
console.log('11. To return the shortest string of the array');
const givenArray=['Apple','Strawberry','Banana','Kiwi','Fig'];
console.log('The given array is: ' + givenArray);
function findShortestStr() {
let x = givenArray[0];
for (let i=0; i<givenArray.length; i++){
     if (givenArray[i].length<x.length){
        x=givenArray[i];
     };
};
return x;
};
console.log('The shortest string in the above array is: '+findShortestStr());
console.log('_______________________________________________________________');
