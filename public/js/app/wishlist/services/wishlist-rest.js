'use strict';

angular.module('ds.wishlist')
  .factory('WishlistREST', ['Restangular', 'SiteConfigSvc', function(Restangular, siteConfig){

    return {
      Wishlist: Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl(siteConfig.apis.wishlist.baseUrl);
      })
    };

}]);
