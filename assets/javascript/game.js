//Global Variables
//------------------------------------------------------------------------------------------------
questionNum = 1;
answerCorrect = 0;
incorrectAnswer =0;
notAnswered = 0;
x = 0;
noAnswer == true;

var questions = {
	quest: [
	{
		question: "this is question 1",
		correctAnswer: "this is the correct answer",
		wrongAnswer: "this is a wrong answer",
		wrongAnswer2: "this is another wrong answer",
		wrongAnswer3: "this is the final wrong answer"
	},
	{
		question: "this is question 2",
		correctAnswer: "this is the correct answer",
		wrongAnswer: "this is a wrong answer",
		wrongAnswer2: "this is another wrong answer",
		wrongAnswer3: "this is the final wrong answer"
	},
	{
		question: "this is question 3",
		correctAnswer: "this is the correct answer",
		wrongAnswer: "this is a wrong answer",
		wrongAnswer2: "this is another wrong answer",
		wrongAnswer3: "this is the final wrong answer"
	},]
}


console.log(questions.quest[x]);
// $("#questionBox").html(questions.quest[x].question);

//Functions
//------------------------------------------------------------------------------------------------
function showQuestion()
{
	setInterval(function(){
	$("#questionBox").html(questions.quest[x].question + "<br>");
	$("#questionBox").append(questions.quest[x].wrongAnswer + "<br>");
	$("#questionBox").append(questions.quest[x].correctAnswer + "<br>");
	$("#questionBox").append(questions.quest[x].wrongAnswer2 + "<br>");
	$("#questionBox").append(questions.quest[x].wrongAnswer3 + "<br>");
	x++;
}, 2000)
};




//General Code
//------------------------------------------------------------------------------------------------

$("startButton").click(function(e){
	
	for(i=0; i<3; i++){
		showQuestion();
		//if answer is correct

		//if answer is incorrect

		//if no answer serlected
		if(noAnswer){
			
		}
	}
})
