//Global Variables
//------------------------------------------------------------------------------------------------
answerCorrect = 0;
incorrectAnswer =0;
notAnswered = 0;
x = 0;
var timer;
var groovy = document.getElementById("groove");
var imagine = document.getElementById("dreamer");

var questions = {
	quest: [
	{
		question: "how many people worldwide live in extreme poverty (less than $1.25/day)? ",
		correctAnswer: "1.3 billion",
		answers: [
			"1 million",
			"100 million",
			"500 million",
			"1.3 billion"
			],
	},
	{
		question: "1.3 billion is equivalent to the popluation of:",
		correctAnswer: "the united states, brazil, pakistan, nigeria, russia, japan, and mexico combined.",
		answers: [
			"mexico",
			"europe",
			"canada",
			"the united states, brazil, pakistan, nigeria, russia, japan, and mexico combined."
			],
	},
	{
		question: "which of the following uses the most electricity?",
		correctAnswer: "cowboys stadium",
		answers: [
			"cowboys stadium",
			"lighting the ut tower",
			"electric car",
			"liberia"
			],
	},
	{
		question: "a third of all deaths in children under the age of five in developing countries are linked to:",
		correctAnswer: "malnutrition",
		answers: [
			"traffic accidents",
			"malnutrition",
			"domestic violence",
			"tuberculosis"
			],
	},
	{
		question: "the childhood obesity rate in america has risen from 7% in 1980 to what percent by 2012?",
		correctAnswer: "18%",
		answers: [
			"5%",
			"10%",
			"18%",
			"25%"
			],
	},
	{
		question: "what fraction of the world population lives without electricity?",
		correctAnswer: "1/4",
		answers: [
			"1/16",
			"1/8",
			"1/4",
			"1/2"
			],
	},
	{
		question: "How many people remain without access to an improved source of drinking water, such as household connections or protected dug wells?",
		correctAnswer: "783 million",
		answers: [
			"1.3 billion",
			"783 million",
			"25 million",
			"653 million"
			],
	},		
	{
		question: "what percent of the world population lives on less than $10 a day?",
		correctAnswer: "80%",
		answers: [
			"20%",
			"40%",
			"60%",
			"80%"
			],
	},
	{
		question: "what percent of the world population lives on less than $2.50 a day?",
		correctAnswer: "50%",
		answers: [
			"10%",
			"25%",
			"50%",
			"75%"
			],
	},
	{
		question: "how many children die each day due to poverty?",
		correctAnswer: "22,000",
		answers: [
			"2,000",
			"12,000",
			"22,000",
			"220,000"
			]
	},
	],
}



//Functions
//------------------------------------------------------------------------------------------------

//display the questions and answers
function display(){
	$("#title").html(questions.quest[x].question);
	$("#firstAnswer").html(questions.quest[x].answers[0]);
	$("#secondAnswer").html(questions.quest[x].answers[1]);
	$("#thirdAnswer").html(questions.quest[x].answers[2]);
	$("#fourthAnswer").html(questions.quest[x].answers[3]);
}

//music controls
function playBeasties(){
	groovy.play();
}

function stopBeasties(){
	groovy.pause();
	groovy.currentTime = 0;
}

function playEddie(){
	imagine.play();
}

function stopEddie(){
	imagine.pause();
	imagine.currentTime = 0;
}



//General Code
//------------------------------------------------------------------------------------------------

$(".startButton").click(function(e)
{

	$(".startButton").hide();
	display();
	stopEddie();	
	playBeasties();

	var timer = setInterval(function(game) 
	{
		x++;
		
		if(x === 0)
		{
			display();
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
			//stop the interval and change the music
			clearInterval(timer);
			stopBeasties();
			playEddie();
			//calculate number of unanswered questions
			notAnswered = 10 - (answerCorrect + incorrectAnswer);
			//display game stats
			$("#title").html("Game Over");
			$("#firstAnswer").html("Correct: " + answerCorrect);
			$("#secondAnswer").html("Incorrect: " + incorrectAnswer);
			$("#thirdAnswer").html("Not Answered: " + notAnswered);
			$("#fourthAnswer").html("Oxfam estimates that it would take $60 billion annually to end extreme global poverty--that's less than 1/4 the income of the top 100 richest billionaires.");
			//target the original start button, but change text to reflect that we are restarting
			$(".startButton").show().text("try again");
			//reset the gloabal variables so game can restart
			answerCorrect = 0;
			incorrectAnswer =0;
			notAnswered = 0;
			x = 0;
		}

		
}, 10000);
	

$(".answer").unbind().click(function(e)
{
	console.log("run");
	if (this.textContent === questions.quest[x].correctAnswer)
	{
		$("#title").html("Correct!!!");
		$("#firstAnswer").html("");
		$("#secondAnswer").html("");
		$("#thirdAnswer").html("");
		$("#fourthAnswer").html("");
		answerCorrect = answerCorrect + 1;
			if(x === 0)
			{
				$("#firstAnswer").html("that's a whole lot of people");
			}
			if(x === 1)
			{
				$("#firstAnswer").html("that really is a LOT of people");
			}
			if(x === 2)
			{
				$("#firstAnswer").html("it take a lot of power to fire up that big screen");
			}
			if(x === 3)
			{
				$("#firstAnswer").html("");
			}
			if(x === 4)
			{
				$("#firstAnswer").html("");
			}
			if(x === 5)
			{
				$("#firstAnswer").html("that's no microwave, no television, no air conditioning...");
			}
			if(x === 6)
			{
				$("#firstAnswer").html("");
			}
			if(x === 7)
			{
				$("#firstAnswer").html("");
			}
			if(x === 8)
			{
				$("#firstAnswer").html("");
			}
			if(x === 9)
			{
				$("#firstAnswer").html("the seating capacity of madison square garden is 18,200");
			}
	}
	else
	{
		$("#title").html("wrong answer");
		$("#firstAnswer").html("the correct answer is: " + questions.quest[x].correctAnswer);
		$("#secondAnswer").html("");
		$("#thirdAnswer").html("");
		$("#fourthAnswer").html("");
		incorrectAnswer = incorrectAnswer + 1;
	}

});	

			

});















