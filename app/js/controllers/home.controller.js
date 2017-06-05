/**
 * @author mano
 */
(function() {
    angular
        .module('app')
        .controller('HomeController', ['$scope','appService',function ($scope,appService) {
        //vars
        /* jshint validthis: true */
        var data = appService.api();
        $scope.starPlayer = data.starPlayer;
        $scope.oldMatches = data.oldMatches;
        $scope.match = data.matches;
$scope.leagues = data.leagues;
$scope.quantity = 4;
$scope.oldMatchQuantity = 4;
$scope.todaysMatch = _.filter($scope.match.matches, function(innings){return moment().isSame(moment(innings.date),'day')});
sessionStorage.setItem("hot", JSON.stringify($scope.todaysMatch.splice(0,4)));
        }]);
    
})();