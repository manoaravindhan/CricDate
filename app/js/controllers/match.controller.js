/**
 * @author mano
 */
(function() {
    angular
        .module('app')
        .controller('MatchController',MatchController);

    function MatchController($scope, $state, $stateParams,matchService) {
        //vars
        /* jshint validthis: true */
        $scope.matchId =  $stateParams.id;
        $scope.match = matchService.api().match;
$scope.hotMatches = JSON.parse(sessionStorage.getItem("hot"));
    }
})();