'use strict';

var concertApp = angular.module('concertApp', []);

concertApp.controller('ConcertListCtrl', function($scope) {
  $scope.concerts = [
    {'name': 'Slowdive',
     'snippet': 'Distinctive indie rockers from Reading who employed atmospheric harmonies, rippling processed guitars, and an ambient production sensibility.'},
    {'name': 'Fleetwood Mac',
     'snippet': "Mick Fleetwood's boys (and girls) morphed from a respected British blues outfit into the world's biggest pop band by the 1970s."},
    {'name': 'Caribou',
     'snippet': "Canadian musician's one-man project (originally called Manitoba) that seamlessly blends electronic production with psychedelic pop pastiche."}
  ];
});
