/**
 * Created by HECH on 8/19/2016.
 */
(function () {
    angular.module('jiali').controller('jiali.controller', controller);
    controller.$inject = ['$scope', '$location'];
    function controller($scope, $location) {
        var vm = this;
        vm.jumpToLight = jumpToLight;
        function jumpToLight() {
            $location.url('/craw');
            console.log('haha');
        }
    }


})()