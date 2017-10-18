
// DOM references //
var $question = document.getElementById('question');
var $score = document.getElementById('score');
var $feedback = document.getElementById('feedback');
var $start = document.getElementById('button');
var $form = document.getElementById("answer");
var $timer = document.getElementById("timer");

// JavaScript Document

function update(element, content, klass) {
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if(klass) {
		p.className = klass;
	}
}

var quiz = {
	'name': 'Super Hero Name Quiz',
	'description': 'How many super heros can you name?',
	'question': 'What is the real name of ',
	'questions': [{
		'question': 'Superman',
		'answer': 'Clark Kent'
	}, {
		'question': 'Wonderwoman',
		'answer': 'Dianna Prince'
	}, {
		'question': 'Batman',
		'answer': 'Bruce Wayne'
	}, ]
};

// Event listeners
$start.addEventListener('click', function () {
	play(quiz)
}, false);

function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}
hide($form);
// main function declaration
function play(quiz) {
	// innitialize timer and set up an interval that counts down;
	var time = 20;
	update($timer, time);
	var interval = window.setInterval (countDown, 1000);
	hide($start);
	show($form);
	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		check($form[0].value);
	}, false);
	var score = 0; // init score
	// main game loop
	update($score, score);
	var i = 0;
	chooseQuestion();
	// end of main game loop

function chooseQuestion() {
	var question = quiz.questions[i].question;
	ask(question);

	function ask(question) {

		update($question, quiz.question + question);
		$form[0].value = "";
		$form[0].focus();

	}

	function check(answer) {

		if (answer === quiz.questions[i].answer) {
			update($feedback, 'Correct!', 'right');
	// increase score by 1
			score++;
			update($score, score);
		} else {

			update($feedback, 'Wrong!', 'wrong');

		}
		i++;
		if(i === quiz.questions.length) {
			gameOver();
		} else {
			chooseQuestion();
		}
	}

	// main game loop
	for(var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	}
	// end of main game loop
	



	function gameOver() {

		// inform the player that the game has finished
		// and tell them how many points they have scored
		update($question, 'Game Over, you scored ' + score + ' points');
		hide($form);
	show($start);
		// stop the countDown interval
		window.clearInterval(interval);
	}

	gameOver();
}

	
	//this is called every second and decrease the time
	function countDown() {
		// decrease time by 1
		time--;
		// update the time displayed
		update($timer, time);
		// the game is over if the timer has reached 0
		if(time <= 0) {
			gameOver();
		}
	}
	
	
	
	
}

