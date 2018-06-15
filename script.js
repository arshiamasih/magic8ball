$(document).ready(function(){
//CREATE RANDOMIZER
$("#answer").hide();

var magic8Ball = {};
magic8Ball.listOfAnswers = ["go with your gut", "listen to your heart", "ask a loved one", "you already know"];

magic8Ball.predictFuture = function(question) {
    $("#8ball").effect( "shake" );
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * this.listOfAnswers.length;
		var randomIndex = Math.floor(randomNumberArray);
		var answer = this.listOfAnswers[randomIndex];
		$("#answer").text( answer );
		$("#answer").fadeIn(4000);
	  $("#answer").fadeOut(2000);
		console.log(answer);
};



var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");


	setTimeout(
		function() {
		var question = prompt("ASK ME ANYTHING");
		magic8Ball.predictFuture(question);
		}, 500);
};


$("#questionButton").click( onClick );

});
