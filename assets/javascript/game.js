//___________________Variables________________________

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var answerChoices = ["ostrich", "democracy", "below", "beautiful", "chasm", "sycamore", "toaster", "horizon", "falling"];
var wordAnswer = answerChoices[Math.floor(Math.random() * answerChoices.length)];	console.log(wordAnswer);
//___________________ GAME INITIALIZE __________________

document.onkeyup = function() {
	var userPick = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (isNaN(userPick)) {
	console.log(userPick);
	} else {
	alert("Oops! It looks like you typed an invalid character. Remember, you must type a letter of the alphabet to play Hangman.");	
 	}

//_________________ If the chosen word is ostrich _______________________

	if (userPick === "o" || userPick === "s" || userPick === "t" || userPick === "r" || userPick === "i" || userPick === "c" || userPick === "h") {
		if ((userPick === "o") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
		if ((userPick === "s") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
		if ((userPick === "t") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
		if ((userPick === "r") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
		if ((userPick === "i") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
		if ((userPick === "c") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
		if ((userPick === "h") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		}
	} else {
		console.log("wrong answer");
	}
}


//check to see if the user typed a letter
/*


// This bit of code turns a user's keypress into a string

document.onkeyup = function(); {
	var index = String.fromCharCode(event.keyCode).toLowerCase;
}
}
*/u
