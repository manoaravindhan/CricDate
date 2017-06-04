/**
 * @author ctola
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('PlayerController',PlayerController);

    function PlayerController($scope, $state, $stateParams,appService) {
        //vars
        /* jshint validthis: true */
        $scope.playerId =  $stateParams.id;
        $scope.playerStats = appService.api().starPlayer;

    }
})();