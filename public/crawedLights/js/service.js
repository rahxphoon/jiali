/**
 * Created by HECH on 8/19/2016.
 */

(function () {
    angular.module('jiali.craw').factory('jiali.craw.service', service);
    service.$inject = ['$http', '$resource'];
    function service($http, $resource) {
        return {findAllData: findAllData};

        function findAllData() {
            return $http({
                method: "post",
                url: 'craw/findAllData',
                data: ''
            }).success(function (response) {
                console.log(response)
            }).error(function (err) {
                    console.error(err)
                }
            )
        }
    }
})();