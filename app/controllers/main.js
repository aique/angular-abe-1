angular.module('GuessTheNumber', []).controller('guessTheNumberCtrl', function guessTheNumberCtrl($scope)
{
    $scope.verifyGuess = function()
    {
        $scope.deviation = $scope.guess - $scope.original;
        $scope.numOfTries++;
    }

    $scope.initGame = function()
    {
        $scope.numOfTries = 0;
        $scope.original = Math.floor((Math.random() * 1000) + 1); // genera un número aleatorio entre 1 y 1000
        $scope.guess = null;
        $scope.deviation = null;
    }

    $scope.initGame();
});
