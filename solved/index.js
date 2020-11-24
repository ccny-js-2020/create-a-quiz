var index = 0;
var correct = 0;
var incorrect = 0;

var trivia = [
	{
		question: 'Who was the first person to land on the moon?',
		options: ['Neil Armstrong', 'John Smith', 'Bob Saget'],
		answer: 'Neil Armstrong'
	},
	{
		question: 'What is the capital of New York?',
		options: ['Syracuse', 'Albany', 'Brooklyn'],
		answer: 'Albany'
	},
	{
		question: 'What was the greatest selling album of the 80s',
		options: ['Thriller', 'No Jacket Required', 'Back In Black'],
		answer: 'Thriller'
	}
]

function nextQuestion(index){
	$('#question').html("Question " + (index + 1) + ": " + trivia[index].question);

	var options = "<ul>";
	for(var i = 0; i < trivia[index].options.length; i++){
		options += "<li><button class='answer-buttons' value="+trivia[index].options[i].split(" ").join("+")+">" + trivia[index].options[i] + "</button></li>"
	}

	$('#options-list').html(options + "</ul>")

}

$(document).keydown(function(e){
	if(e.key === " "){
		$('#options-list').show();
		$('#trivia').hide();

		nextQuestion(0)
	}
})

$(document).on("click", ".answer-buttons", function(){
	if($(this).val().split("+").join(" ") === trivia[index].answer){
		correct++;
	} else {
		incorrect++;
	}

	index++;
	if(index < trivia.length){
		nextQuestion(index);
	} else {
		$(".question-and-options").text("Final Score: " + ((correct/trivia.length).toFixed(2)*100) + "%")
	}
});
