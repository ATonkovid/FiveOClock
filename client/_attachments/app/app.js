define(['angular', 'jquery', 'app/loginController', 'app/landingController', 'app/profileController', 'user-storage', 'profile'],
    function (angular, $, loginController, landingController, profileController, userStorage, Profile) {
        angular.module('fiveOClock')
            .config(function ($routeProvider) {
                var resolve = {
                    sync: function (userStorage, Profile) {
                        return userStorage.sync([Profile]);
                    }
                }

                $routeProvider.when('/login',
                    {
                        templateUrl: 'app/login_registration.html',
                        controller: 'loginController'
                    })
                    .when('/landing_after_login',
                        {
                            templateUrl: 'landing_after_login_ru.html',
                            controller: 'landingController',
                            resolve: resolve
                        })
                    .when('/profile',
                        {
                            templateUrl: 'app/profile.html',
                            controller: 'profileController',
                            resolve: resolve
                        })
                    .otherwise({
                        redirectTo: '/login'
                    });
            });
    })