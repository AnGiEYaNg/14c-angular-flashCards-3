app.directive("flashcard",function(ScoreFactory){
	return {
		restrict: "E",
		templateUrl: "js/directives/flash-card/flash-card.html",
		scope: { card: "="},
		link: function (scope, element, attrs) {
			scope.answerQuestion = function (answer, flashCard) {
			if (!flashCard.answered) {
				flashCard.answered = true;
				flashCard.answeredCorrectly = answer.correct;
				
				flashCard.answeredCorrectly ? ScoreFactory.correct++ : ScoreFactory.incorrect++
				
			}

	}

	}
	}
})
