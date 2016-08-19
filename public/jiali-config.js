/**
 * Created by HECH on 8/17/2016.
 */
(function () {

    angular.module('jiali').config(config);


    config.$inject =
        ['$routeProvider',
            '$stateProvider',
            '$urlRouterProvider',
        ];
    function config($routeProvider, $stateProvider,
                    $urlRouterProvider) {
        //$urlRouterProvider.otherwise("/state1");
        //$stateProvider.state('state1', {
        //    url: '/login',
        //    templateUrl: "public/login/test.html"
        //})
        $routeProvider.when('/', {
            templateUrl: '/public/index.html',
            controller: 'jiali.controller',
            controllerAs: 'vm'
        }).when('/craw', {
                templateUrl: '/public/crawedLights/result.html',
                controller: 'jiali.craw.controller',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            })
    }
})();