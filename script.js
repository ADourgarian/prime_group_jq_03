$(function() {
  var homepie = [
   'Chris Arnesen',
   'Ashley Steele',
   'John Crimmings',
   'Charlotte Kroening',
   'Connor Klausing',
   'Adia Alderson',
   'Amanda Bausch',
   'Andrew Dourgarian',
   'Andrew Harasymiw',
   'Ben Margis',
   'Brandi Brown',
   'Clayton Hottinger',
   'Derek Roche',
   'Gwen Paul',
   'Keisha Josephs',
   'Kyra Crowston',
   'Moni Francesca',
   'Nicholas Gill',
   'Wallace Wylie',
   'James Kirwin',
   'Manuel Zumarraga',
   'Sam Richard'];

$("form").on("submit", function(event) {
  event.preventDefault();
  var groups = parseInt($(".Group").val());
  var allTeams = [];

  for (var i = 0; i < groups; i++) {
    allTeams.push([]);
    //console.log(allTeams);
  }


//  console.log(homepie.splice(Math.floor(Math.random()*homepie.length), 1));

console.log(allTeams);

  while (homepie.length != 0) {
    for (i = 0; i < allTeams.length; i++) {
      allTeams[i].push(homepie.splice(Math.floor(Math.random()*homepie.length), 1).join(''));
      if (homepie.length === 0){
        break;
      }
    }
  };
console.log(allTeams);
});



});
