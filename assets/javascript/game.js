//___________________Variables________________________

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var answerChoices = ["ostrich", "democracy", "below", "beautiful", "chasm", "sycamore", "toaster", "horizon", "falling"];

//___________________GAME INITIALIZE__________________

var userPick = prompt("Pick a letter to fill in the word blanks.").toLowerCase();
var wordAnswer = answerChoices[Math.floor(Math.random() * answerChoices.length)];
//var index = alphabet.indexOf(userPick);

//check to see if the user typed a letter
if (isNaN(userPick)) {
	console.log("they picked a letter");
} else {
	alert("Oops! It looks like you typed an invalid character. Remember, you must type a letter of the alphabet to play Hangman.");	
}

// This bit of code turns a user's keypress into a string
/*
document.onkeyup = function(); {
	var index = String.fromCharCode(event.keyCode).toLowerCase;
}
}
*/
