function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Sua pontução: " + quiz.score +  "</h2>";
    gameOverHTML += " <h2 ide='score'> Você Ganhou Parabéns " + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Determine os valores de m, n e p: (m + n + p)x4 – (p + 1)x³ + mx² + (n –p)x + n = 2mx³ + (2p + 7)x² + 5mx + 2m", ["p=-3,m=2,n=1", "p=2,m=-3,n=1","p=1,m=2,n=-3", "p=-3,m=1,n=2"], "p=-3,m=1,n=2"),
    new Question("Posso trazer lágrimas em seu rosto, sou criado em um instante mas duro a vida toda, o que eu sou?", ["4594145", "29912581", "456991", "1134145"], "456991"),
    new Question("Qual não é um JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Qual é o nome da personagem principal de Spy x Family", ["Anya", "Yor", "Peach", "Becky"], "Anya"),
    new Question("Qual é o país que o jogo da memoria foi criado?", ["Coreia do Sul", "Tailandia", "Australia", "China"], "China")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();