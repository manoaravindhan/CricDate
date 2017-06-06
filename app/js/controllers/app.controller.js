//appController
/**
 * @author mano
 */
(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController($scope) {
        //vars
        /* jshint validthis: true */
        $scope.logout = function(){
            localStorage.setItem('user','');
            location.href = location.href.split('/')[0] +'/login.html';
        };  
        var user = localStorage.getItem('user');
        if(user)
            $scope.user = JSON.parse(user);   
        else
            location.href = location.href.split('/')[0] +'/login.html';
        }
})();