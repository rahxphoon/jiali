/**
 * Created by HECH on 8/17/2016.
 */
(function () {

    angular.module('jiali').config(config);


    config.$inject =
        [
            '$stateProvider',
            '$urlRouterProvider',
        ];
    function config($stateProvider,
                    $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1");
        $stateProvider.state('state1', {
            url: '/login',
            templateUrl: "public/login/test.html"
        })
    }

})();