$(document).ready(function() {
var meb = {};
$("#answer").hide();

meb.listOfAnswers = ["probs not", "outlook bleak", "definitely bro!", "ask again later", "how would I know?", "stop shaking me!", "its a certainty", "nope", "hell yeah!"];

meb.askQuestion = function(question) 
{
	$("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	var randNum = Math.random();
	var randLengthArray = randNum * this.listOfAnswers.length;
	var randIndex = Math.floor(randLengthArray);
	var answer = this.listOfAnswers[randIndex];
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
};
	var withClick = function () { 
	$("#answer").hide();
	$("#8ball").effect("shake");
	setTimeout(function(){
	var question = prompt("Ask me a yes or no question.");
	meb.askQuestion(question);
	}, 1000);
};
$("#questionButton").click(withClick);
});