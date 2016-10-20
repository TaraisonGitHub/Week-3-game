//___________________Variables________________________

//var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var answerChoices = ["ostrich", "democracy", "below", "beautiful", "chasm", "sycamore", "toaster", "horizon", "falling"];
var wordAnswer = answerChoices[Math.floor(Math.random() * answerChoices.length)];	console.log(wordAnswer);
var userGuess = [];
var answerArray = [];

//___________________ GAME INITIALIZE __________________

document.onkeyup = function() {
	 var userKeystroke = String.fromCharCode(event.keyCode).toLowerCase();

	if (isNaN(userKeystroke)) {
	userGuess.push(userKeystroke);
	console.log(userGuess.length);
	} else {
	alert("Oops! It looks like you typed an invalid character. Remember, you must type a letter of the alphabet to play Hangman.");	
 	}
}


	for (var a = 0; a < wordAnswer.length; a++) {
		document.write(answerArray[a] = "_ ");
	}
	var s = answerArray.join(" ");
	document.getElementById('box').innerHTML = s


	if (wordAnswer.includes("below") && (userGuess.includes("b"))) {
		document.write(answerArray.splice(0,1,"b"));
	} 


/*
var boolean = wordAnswer.includes
		console.log("it chose belo("below");
	if (boolean === true) {w");
	} else {
		console.log("it chose on of the other words");
	}
*/
/*	for (var x = 0; x < 27; x++) {
		guess.push(userPick);
		console.log(guess);
	}
*/
// function myFunction () {
// 	var n = (wordAnswer(userPick.includes("ostrich")));

// 	if (var n = true) {
// 		console.log("blargh");
// 	} else {
// 		console.log("nope");
// 	}
// }


// if (wordAnswer.indexOf(0) === "ostrich") {
// 		if ((userPick === "o") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(0, "o");
// 		}
// 		if ((userPick === "s") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(1, "s");
// 		}
// 		if ((userPick === "t") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(2, "t");
// 		}
// 		if ((userPick === "r") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(3, "r");
// 		}
// 		if ((userPick === "i") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(4, "i");
// 		}
// 		if ((userPick === "c") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(5, "c");
// 		}
// 		if ((userPick === "h") && (wordAnswer === "ostrich")) {
// 		console.log("this letter is in the word ostrich");
// 		answerArray.charAt(6, "h");
// 		}
// 	} else {
// 		console.log("wrong answer");
// 	}
// }