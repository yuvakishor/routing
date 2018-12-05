app.factory('firstService', ['$q', '$http', function ($q, $http) {
    var get = function () {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.talentscreen.io/v1/subjects',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (result) {
            d.resolve(result.data);
        })
        return d.promise;
    }

    return {
        getRequest: get
    }
}])