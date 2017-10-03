
// DOM references //
var $question = document.getElementById('question');
var $score = document.getElementById('score');
var $feedback = document.getElementById('feedback');
var $start = document.getElementById('button');
var $form = document.getElementById("answer");

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
	'description': 'HOw many super heros can you name?',
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
/// dom reference ///

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
	hide($start);
	show($form);
	$form.addEventListener("submit", function(event) {
		event.preventDefault();
		check($form[0].value);
	}, false);
	var score = 0; // init score
	// main game loop
	update($score, score);
//	for (var i = 0, question, answer; i < quiz.questions.length; i++) {
//		question = quiz.questions[i].question;
//		answer = ask(question);
//
//		check(answer);
//	}
	var i = 0;
	chooseQuestion();
	// end of main game loop
	//gameOver();
function chooseQuestion() {
	var question = quiz.questions[i].question;
	ask(question);
}
	// helper functions
	function ask(question) {

		update($question, quiz.question + question);
//		alert($question.firstChild.textContent);
//		return prompt("Enter your answer:");
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

	function gameOver() {

		// inform the player that the game has finished
		// and tell them how many points they have scored
		update($question, 'Game Over, you scored ' + score + ' points');
		hide($form);
	show($start);
	}
}
