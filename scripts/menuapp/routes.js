(function () {
    'use strict';
    angular.module('MenuApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html'
                })
                .state('categories', {
                    url: '/categories',
                    templateUrl: 'views/categories.html',
                    controller: 'CategoriesController',
                    controllerAs: 'CatCtrl',
                    resolve: {
                        categories: ['MenuDataService', function (MenuDataService) {
                            return MenuDataService.getAllCategories();
                        }]
                    }
                })
                .state('items', {
                    url: '/categories/:shortName/items',
                    templateUrl: 'views/items.html',
                    controller:'ItemsController',
                    controllerAs:'ItemCtrl',
                    resolve:{
                        item:['$stateParams', 'MenuDataService',function($stateParams,MenuDataService){
                            return MenuDataService.getItemsForCategory($stateParams.shortName);
                        }]
                    }

                })
        }])
})();