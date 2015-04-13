var userParser = require('./user-parser');
 
var userData = [
  { name: 'Bob Damato', title: 'Director', rating: 1 },
  { name: 'Greg Hoch', title: 'Developer', rating: 3 },
  { name: 'Ralph Peterson', title: 'Developer', rating: 5 },
  { name: 'Toby Morris', title: 'Developer', rating: 3 },
  { name: 'Darek Rossman', title: 'Developer', rating: 2 },
  { name: 'Ken Pace', title: 'Developer', rating: 4 },
  { name: 'Fahrudin Spiodic', title: 'Designer', rating: 4 },
  { name: 'Lynn Johnson', title: 'Designer', rating: 5 }
];
 
var allUserNames = userParser.allUserNames(userData);
 
var allDeveloperNames = userParser.allDeveloperNames(userData);
 
// BONUS!
var averageUserRating = userParser.averageUserRating(userData);
 
console.log('All users:', allUserNames);
// --> All users: ["Bob Damato", "Greg Hoch", "Ralph Peterson", "Toby Morris", "Darek Rossman", "Ken Pace", "Fahrudin Spiodic", "Lynn Johnson"]
 
console.log('Developers:', allDeveloperNames);
// --> Developers: ["Greg Hoch", "Ralph Peterson", "Toby Morris", "Darek Rossman", "Ken Pace"]
 
console.log('Average rating:', averageUserRating);
// --> Average rating: 3.375// JavaScript Document