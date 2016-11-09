(function () {
    'use strict';
    angular.module('MenuApp')
        .controller('ItemsController', ['item','$stateParams',function (item,$stateParams) {
            this.item = item.data;
            this.shortName = $stateParams.shortName
        }]);
})();