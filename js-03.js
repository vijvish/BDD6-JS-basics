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
    console.log('Details of Player'+i+':')
    console.log('Name: ' + myObj.Players[i].firstName + ' ' + myObj.Players[i].lastName)
    console.log('Age: ' + myObj.Players[i].Age)
    console.log('Top Skill: ' + myObj.Players[i].TopSkill)
    console.log('Batting Position: ' + myObj.Players[i].BattingPosition)
    console.log('No. of Runs: ' + myObj.Players[i].maxRuns)
    console.log('')
};