(function () {
    'use strict';
    angular.module('data')
        .service('MenuDataService', ['$http','ApiRoot', function ($http,ApiRoot) {
            this.getAllCategories = function () {
                return $http.get(ApiRoot+'categories.json');
            };
            this.getItemsForCategory = function(categoryShortName)
            {
                return $http.get((ApiRoot+'menu_items.json?category='+categoryShortName));
            }
        }]);
})();



