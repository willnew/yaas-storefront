'use strict';

angular.module('ds.wishlist')
  .factory('WishlistSvc', ['settings', 'GlobalData', 'WishlistREST', function(settings, GlobalData, WishlistREST){

    return {
      getAll: function() {
        //TODO: pagination?
        return WishlistREST.Wishlist.all('wishlists').getList();
      },
      getOne: function(wishlistId) {
        return WishlistREST.Wishlist.one('wishlists', wishlistId).get();
      },
      create: function(params) {
        return WishlistREST.Wishlist.all('wishlists').post(params);
      },
      createWishlistItem: function(wishlistId, params) {
        return WishlistREST.Wishlist.one('wishlists', wishlistId).post('wishlistItems', params);
      }
    };

  }]);
