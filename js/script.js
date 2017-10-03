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
	"name":"Super Hero Name Quiz",
	"description":"How many super heroes can you name?",
	"question":"What is the real name of ",
	"questions": [
		{"question": "Superman", "answer": "Clarke Kent" },
		{"question": "Batman", "answer": "Bruce Wayne" },
		{"question": "Wonder Woman", "answer": "Dianna Prince" }
	]
};
/// dom reference ///


var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedbak = document.getElementById("feedback");


update($score, score);
var score = 0; // initial score

play(quiz);

function play(quiz) {
	// main game loop
	for(var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	}
	// end of main game loop
	gameOver();
	
	function ask(question) {
		update($question,quiz.question + question);
		return prompt("Enter your answer"); // quiz[i][0] is the ith question
	}
	function check(answer) {
		if(answer === quiz.questions[i].answer) { // quiz[i][1] is the ith answer
			update($feedbak, "Correct!", "right");
			// increase score by 1
			score++;
			update($score, score);
		} else {
			update($feedbak, "Wrong!", "wrong");
		}
	}
	function gameOver() {
		// inform the player that the game has finished and tell how many points they have scored
		update($question, "Game Over, you scored " + score + " points");
	}
}