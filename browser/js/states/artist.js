app.config(function ($stateProvider) {
    $stateProvider.state('artist', {
        url: '/artists/:artistId',
        templateUrl: '/views/artist.html',
            controller: 'ArtistCtrl'
    })
});
