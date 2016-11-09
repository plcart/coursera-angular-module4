(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('CategoriesController', ['categories',function (categories) {
            var ctrl = this;
            ctrl.categories = categories.data;
        }]);
})();