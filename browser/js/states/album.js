app.config(function ($stateProvider) {
    $stateProvider.state('album', {
        url: '/albums/:albumId',
        templateUrl: '/views/album.html',
            controller: 'AlbumCtrl'
    });
});
