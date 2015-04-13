// Fill out these three methods with the expected behavior.
//
// DO NOT use for loops, while loops, or any of that.
// You'll want to use the functional array methods:
//
//  Array.map()
//  Array.reduce()
//  Array.filter()
// 
//  You'll need to research how these array methods are used
//  in order to complete this exercise.
 
 
module.exports = {
  
  allUserNames: function(data) {
    // Takes an array of user objects and returns an array of user names.
    // --> ["Bob Damato", "Greg Hoch", "Ralph Peterson", "Toby Morris", "Darek Rossman", "Ken Pace", "Fahrudin Spiodic", "Lynn Johnson"]
  },
 
  allDeveloperNames: function(data) {
    // Takes an array of user objects and returns an array of user names -
    // only including names of developers.
    //
    // Hint:
    //
    //    return filterUserNames(data, function(){
    //      ...some code here...
    //    })
  },
 
  averageUserRating: function(data) {
    // BONUS:
    // Takes an array of user objects and returns the average 
    // of all user ratings as a single number.
    //
    // Hint: you might want to look at Array.prototype.reduce()
  }  
};
 
function filterUserNames(userData, filterFn) {
  // Takes an array of user objects and a custom filtering function
  // and returns an array of user names. This is like the `getNames`
  // function, except instead of returning all names, it should filter