app.config(function ($stateProvider) {
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/views/albums.html',
            controller: 'AlbumsCtrl'
    })
    .state('albumList.album', {
      url: '/:albumId',
      templateUrl: '/views/album.html',
          controller: 'AlbumCtrl'
    })
});
