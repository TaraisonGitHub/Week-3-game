var randomWordArr = ["beer", "wine", "alcohol"];
var randomWord = randomWordArr[Math.floor(Math.random()) * randomWordArr.length];

var a;
var count = 0;
var answerArray = [];

function startUp()
{
	for (var i = 0; i < randomWord.length; i++)
	{
		answerArray[i] = "_";
	}

	s = answerArray.join(" ");
	document.getElementById("answer").innerHTML = s;
}

function Letter ()
{
	if (letter.length > 0)
	{
		for (var i = 0; i < randomWord.length; i++)
		{
			if (randomWord[i] === letter)
			{
				answerArray[i] == letter;
			}
		}
		count++;
		document.getElementById("counter".innerHTML = "No of clicks: " + count);
		document.getElementById("answer").innerHTML = answerArray.join(" ");
	}
	if (count > 0)
	{
		doucment.getElementById("stat").innerHTML = "jkrsdjfsd";
	}
}