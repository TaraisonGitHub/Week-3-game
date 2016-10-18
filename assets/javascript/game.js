//___________________Variables________________________

//var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var answerChoices = ["ostrich", "democracy", "below", "beautiful", "chasm", "sycamore", "toaster", "horizon", "falling"];
var wordAnswer = answerChoices[Math.floor(Math.random() * answerChoices.length)];	console.log(wordAnswer);
var answerArray = [];


//___________________ GAME INITIALIZE __________________



document.onkeyup = function() {
	 var userPick = String.fromCharCode(event.keyCode).toLowerCase();

	if (isNaN(userPick)) {
	console.log(userPick);
	} else {
	alert("Oops! It looks like you typed an invalid character. Remember, you must type a letter of the alphabet to play Hangman.");	
 	}
}


	for (var a = 0; a < wordAnswer.length; a++) {
		document.write(answerArray[a] = "_ ");
	}

if (wordAnswer.indexOf(0) === "ostrich") {
		if ((userPick === "o") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(0, "o");
		}
		if ((userPick === "s") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(1, "s");
		}
		if ((userPick === "t") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(2, "t");
		}
		if ((userPick === "r") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(3, "r");
		}
		if ((userPick === "i") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(4, "i");
		}
		if ((userPick === "c") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(5, "c");
		}
		if ((userPick === "h") && (wordAnswer === "ostrich")) {
		console.log("this letter is in the word ostrich");
		answerArray.charAt(6, "h");
		}
	} else {
		("wrong answer");
}