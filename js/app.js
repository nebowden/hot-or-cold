
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	//message for wrong entry

  	var wrongEntry = "Please enter a whole number between 1 and 100."

  	/* number generator*/

  	var	getNumber = function() {
  		var ranNum = Math.floor((Math.random() * 100) + 1);
  		return ranNum;
  		}

  	getNumber();

	var answer = getNumber();

	//remove this
	console.log(answer);

	//set counter to 0
	var z = 0;

	//start new game
	var newGame = function () {
		z = 0;
		$("#count").text("0");
		$(".guessBox").find("li").remove();
		getNumber();
		answer = getNumber();
		console.log(answer); //remove this
		$("#feedback").text("Make your Guess!");
		highlightGuessBox();
	};

	$(".new").click(function(){
		newGame();
	});

	/*focus on the text entry*/

	var highlightGuessBox = function () {
			$("#userGuess").focus().val('');
		};

	/*in-game play*/

	$('#guessButton').click(function(event) { 

		event.preventDefault();

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

		var guessCount = function () {
			z = z + 1;
			$("#count").text(z);
		};

		var addGuess = function () {
			$(".guessBox").prepend("<li>" + userNumber + "</li>");
		};

		var userNumber = +$('#userGuess').val();

		if (isNaN(userNumber)) {
			alert(wrongEntry);
		}

		else if (userNumber <= 0) {
			alert(wrongEntry);
		}

		else if (userNumber > 100) {
			alert(wrongEntry);
		}

		else if ((userNumber%1) != 0) {
			alert(wrongEntry);	
		}

		else {
			guessCount();
			addGuess();
			runCompare();
		}
	});
	
});


