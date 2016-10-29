angular.module('productLocatorAdmin')
.config(function($routeProvider) {

    $routeProvider.when('/', {
        template: '<item-list root="$resolve.root"></item-list>',
        resolve: {
            root: function(hrRoot) {
                return hrRoot("http://localhost:8090").follow().$promise;
            }
        }
    }).when('/items/create-item', {
        template: '<item-detail root="$resolve.root" mode="create"></item-detail>',
        resolve: {
            root: function(hrRoot) {
                return hrRoot("http://localhost:8090").follow().$promise;
            }
        }
    }).when('/items/:itemId/edit-item', {
        template: '<item-detail root="$resolve.root" mode="edit"></item-detail>',
        resolve: {
            root: function(hrRoot) {
                return hrRoot("http://localhost:8090").follow().$promise;
            }
        }
    }).when('/items/:itemId/view-item', {
        template: '<item-detail root="$resolve.root" mode="view"></item-detail>',
        resolve: {
            root: function(hrRoot) {
                return hrRoot("http://localhost:8090").follow().$promise;
            }
        }
    }).otherwise({
        redirectTo: '/'
    });

});