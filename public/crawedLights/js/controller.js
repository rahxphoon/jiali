/**
 * Created by HECH on 8/19/2016.
 */

(function () {
    angular.module('jiali.craw').controller('jiali.craw.controller', crawController);
    crawController.$inject = ['$scope', '$route', 'jiali.craw.service'];
    function crawController($scope, $route, service) {
        var vm=this;
        //vm.entries = service.findAllData(function (entries) {
        //    console.log(entries);
        //}); //query() returns all the entries
        vm.hecan = 'sdsdsdsd'
    }
})()