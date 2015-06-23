(function () {
    angular.module('ngSrcLazyLoad', []).directive('ngSrcLazyLoad', function($timeout){
        return {
            name: 'ngSrcLazyLoad',
            scope: {
                ngSrcLazyLoadContainer: '@',
                ngSrcLazyLoadEfect: '@',
                ngSrcLazyLoadEvent: '@',
                ngSrcLazyLoadSelector: '@',
                ngSrcLazyLoadThreshold: '@',
                ngSrcLazyLoadImageLoaded: '='
            },
            restrict: 'A',
            link: function($scope, element, attrs, controller) {
                var options = {};

                if ($scope.ngSrcLazyLoadContainer) {
                    options.container = element[0];
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

                $timeout(function () {
                    var imageList = $(element).find($scope.ngSrcLazyLoadSelector);

                    if (imageList.length) {
                        imageList.lazyload(options);

                        if ($scope.ngSrcLazyLoadImageLoaded) {
                            $($scope.ngSrcLazyLoadSelector).load(function (event) {
                                var image = $(event.target);

                                if (image.data().original === image.attr('src')){
                                    $scope.ngSrcLazyLoadImageLoaded(imageList.index(image));
                                }
                            })
                        }
                    }
                })
            }
        };
    });    
})();
