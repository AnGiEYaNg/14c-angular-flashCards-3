app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory, TemplatesFactory) {
	// $scope.flashCards = FlashCardsFactory;
	$scope.showLoader = true

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node',
	    'All Categories'
	];

    $scope.templates = TemplatesFactory;

	var setFlashCards = function(cardPromise){
		
		cardPromise.then(function(flashCards){
			$scope.flashCards = flashCards.data
			$scope.showLoader = false
		})

	}

	setFlashCards(FlashCardsFactory.getFlashCards())
	$scope.cardCategory = 'All Categories'

	$scope.getCategoryCards = function(category){
		$scope.showLoader = true
		if(category === 'All Categories')
			setFlashCards(FlashCardsFactory.getFlashCards())
		else
		setFlashCards(FlashCardsFactory.getFlashCards(category))
		
		$scope.cardCategory = category
	}

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			
			flashCard.answeredCorrectly ? ScoreFactory.correct++ : ScoreFactory.incorrect++
			
		}

	}


});