
$(document).ready(function(){
	
	

  	/*message for wrong entry*/

  	var wrongEntry = "Please enter a whole number between 1 and 100."

  	/* number generator */

  	var	getNumber = function() {
  		var ranNum = Math.floor((Math.random() * 100) + 1);
  		return ranNum;
  		}

	var answer = getNumber();

	/* set guess counter to 0 */

	var numOfGuesses = 0;

	/* start new game */

	var newGame = function () {
		numOfGuesses = 0;
		$("#count").text("0");
		$(".guessBox").find("li").remove();
		getNumber();
		answer = getNumber();
		$("#feedback").text("Make your Guess!");
		highlightGuessBox();
	};

	/* focus on guess entry box */

	var highlightGuessBox = function () {
			$("#userGuess").focus().val('');
		};

	/*compare user entered number with random number */

	var runCompare = function () {
			var difference = Math.abs(userNumber - answer);
			if (difference == 0) {
				$("#feedback").text("Correct!");
			}
			else if (difference <= 5) {
				$("#feedback").text("You're on fire!");
				highlightGuessBox();
			}
			else if (difference <= 10) {
				$("#feedback").text("You're hot.");
				highlightGuessBox();
			}
			else if (difference <= 20) {
				$("#feedback").text("You're warm.");
				highlightGuessBox();
			}
			else if (difference <= 50) {
				$("#feedback").text("You're cold");
				highlightGuessBox();
			}
			else {
				$("#feedback").text("You're frigid.");
				highlightGuessBox();
			};
		};

	/*keep count of user guesses*/

	var guessCount = function () {
		numOfGuesses = numOfGuesses + 1;
		$("#count").text(numOfGuesses);
	};

	/*display numbers guessed by user*/

	var addGuess = function () {
		$(".guessBox").prepend("<li>" + userNumber + "</li>");
	};

	var userNumber;

	/*get random number to begin first game*/

	getNumber();

	/*new game handler*/

	$(".new").click(function(){
		newGame();
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/* game play on click */

	$('#guessButton').click(function(event) { 

		event.preventDefault();

		userNumber = +$('#userGuess').val();
	

		if (isNaN(userNumber)) {
			alert(wrongEntry);
			highlightGuessBox();
		}

		else if (userNumber <= 0) {
			alert(wrongEntry);
			highlightGuessBox();
		}

		else if (userNumber > 100) {
			alert(wrongEntry);
			highlightGuessBox();
		}

		else if ((userNumber%1) != 0) {
			alert(wrongEntry);
			highlightGuessBox();	
		}

		else {
			guessCount();
			addGuess();
			runCompare();
		}
	});
	
});


