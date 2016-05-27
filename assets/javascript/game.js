//Global Variables
//------------------------------------------------------------------------------------------------
answerCorrect = 0;
incorrectAnswer =0;
notAnswered = 0;
x = 0;
var groovy = document.getElementById("groove");
var imagine = document.getElementById("dreamer");

var questions = {
	quest: [
	{
		question: "this is question 1",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},
	{
		question: "which uses the most electricity?",
		correctAnswer: "cowboys stadium",
		answers: [
			"an electric car",
			"cowboys stadium",
			"lighting the UT tower",
			"liberia"
			],
	},
	{
		question: "this is question 3",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},
	{
		question: "this is question 4",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},
	{
		question: "the gdp of texas is roughly equivalent to that of which country?",
		correctAnswer: "mexico",
		answers: [
			"mexico",
			"russia",
			"uzbekistan",
			"kenya"
			],
	},
	{
		question: "this is question 6",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},
	{
		question: "this is question 7",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},		
	{
		question: "this is question 8",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},
	{
		question: "this is question 9",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			],
	},
	{
		question: "this is question 10",
		correctAnswer: "this is the correct answer",
		answers: [
			"fjdlfkjd",
			"fddsg",
			"ffsdfds",
			"this is the correct answer"
			]
	},
	],
}



//Functions
//------------------------------------------------------------------------------------------------

function display(){
	$("#title").html(questions.quest[x].question);
	$("#firstAnswer").html(questions.quest[x].answers[0]);
	$("#secondAnswer").html(questions.quest[x].answers[1]);
	$("#thirdAnswer").html(questions.quest[x].answers[2]);
	$("#fourthAnswer").html(questions.quest[x].answers[3]);
}

function playBeasties(){
	groovy.play();
}

function stopBeasties(){
	groovy.pause();
}

function playEddie(){
	imagine.play();
}

function playGame(){
	console.log(x);

		if(x === 0)
		{
			
		};
		
		if(x === 1)
		{
			display();
		};
		
		if(x === 2)
		{
			display();
			
		};
		
		if(x === 3)
		{
			display();
			
		};

		if(x === 4)
		{
			display();
		};

		if(x === 5)
		{
			display();
		};

		if(x === 6)
		{
			display();
		};

		if(x === 7)
		{
			display();
		};

		if(x === 8)
		{
			display();
		};

		if(x === 9)
		{
			display();
		};
	
		if(x === 10)
		{
			stopBeasties();
			playEddie();
			notAnswered = 10 - (answerCorrect + incorrectAnswer);
			$("#title").html("Game Over");
			$("#firstAnswer").html("Correct: " + answerCorrect);
			$("#secondAnswer").html("Incorrect: " + incorrectAnswer);
			$("#thirdAnswer").html("Not Answered: " + notAnswered);
			$("#fourthAnswer").html("");
			//reset button
		}

		x++;
}




//General Code
//------------------------------------------------------------------------------------------------

$("#startButton").click(function(e)
{	
	$("#startButton").hide();
	display();	
	playBeasties();
	var timer = setInterval(function() {playGame()}, 10000);
	

$(".answer").click(function(e){
	console.log(this.textContent);
			if (this.textContent === questions.quest[x].correctAnswer)
			{
				$("#title").html("Correct!!!");
				$("#firstAnswer").html("");
				$("#secondAnswer").html("");
				$("#thirdAnswer").html("");
				$("#fourthAnswer").html("");
				answerCorrect = answerCorrect + 1;
			}
			else
			{
				$("#title").html("Wrong Answer");
				$("#firstAnswer").html("");
				$("#secondAnswer").html("");
				$("#thirdAnswer").html("");
				$("#fourthAnswer").html("");
				incorrectAnswer = incorrectAnswer + 1;
			}

	});	

			

});















