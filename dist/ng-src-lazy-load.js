(function () {
    angular.module('ngSrcLazyLoad', []).directive('ngSrcLazyLoad', function($timeout){
        // Runs during compile
        return {
            name: 'ngSrcLazyLoad',
            // priority: 1,
            // terminal: true,
            scope: {
                ngSrcLazyLoadContainer: '@',
                ngSrcLazyLoadEfect: '@',
                ngSrcLazyLoadEvent: '@',
                ngSrcLazyLoadSelector: '@',
                ngSrcLazyLoadThreshold: '@'
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, element, attrs, controller) {
                console.log(arguments);
                var options = {};

                if ($scope.ngSrcLazyLoadContainer) {
                    options.container = $(element[0]);
                }

                if ($scope.ngSrcLazyLoadThreshold) {
                    options.threshold = $scope.ngSrcLazyLoadThreshold;
                }

                if ($scope.ngSrcLazyLoadEvent) {
                    options.event = $scope.ngSrcLazyLoadEvent;
                }

                if ($scope.ngSrcLazyLoadEfect) {
                    options.efect = $scope.ngSrcLazyLoadEfect;
                }

                if ($scope.ngSrcLazyLoadSelector) {

                    $timeout(function () {
                        $($scope.ngSrcLazyLoadSelector).lazyload(options);
                    })
                }
            }
        };
    });    
})()
