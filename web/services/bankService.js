angular.module('bankaroo').service('bankService' , ['$resource', '$http', 'localStorageService', function ($resource, $http, localStorageService) {


    this.getAccounts = function () {
        console.log("Token:", getToken());
        return api('/user/accounts');
    };

    this.getHistory = function (accountId) {
        return api('/user/history', {account: accountId})
    };

    function api(url, params){
        var req = {
            method: 'GET',
            params: params,
            url: '/api' + url,
            headers: {
                'Authorization': getToken()
            }
        };

        return $http(req)
    }

    function getToken(){
        return localStorageService.get('token');
    }

}]);