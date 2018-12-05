app.config(['$resourceProvider', '$stateProvider', '$urlRouterProvider', function ($resourceProvider, $stateProvider, $urlRouterProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })
        .state('subjects', {
            url: '/subjects',
            templateUrl: 'views/subjects.html'
            
        })
        .state('start', {
            url: '/start',
            templateUrl: 'views/start.html'
            
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html'
            
        })
}]);
