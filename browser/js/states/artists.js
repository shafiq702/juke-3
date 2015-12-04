app.config(function ($stateProvider) {
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '/views/artists.html',
            controller: 'ArtistsCtrl'
    })
    .state('artistList.song', {
      url: '/:artistId/songs',
      templateUrl: '/views/artist.html',
          controller: 'ArtistCtrl'
    })
});
