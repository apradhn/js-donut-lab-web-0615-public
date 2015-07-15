//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests, donuts;
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
guests = prompt("Enter the number of guests");
donuts = prompt("Enter the number of donuts");
//use parseInt to convert the users answer from a string to an integer.
guests = parseInt(guests);
donuts = parseInt(donuts);
//write a conditional to check if there are enough donuts
var message;
var count = donuts.toString() + " donuts and " + guests.toString() + " guests.";

if (donuts < guests) { 
  message = "Not enough donuts! " + count; 
} else if (donuts > guests) {
  message = "More than enough donuts. " + count;
} else if (donuts === guests) {
  message = "Just enough donuts. " + count;
}

  //alert the user a message telling them the numbers of donuts and guests and if there are enough or not
  alert(message);