'use strict';


var nameSpace = angular.module("GuitarApp", []);
 
nameSpace.controller("GuitarFunction", function GuitarFunction($scope)
{    
    $scope.guitarVariable = [
{
    "name"      : 'Acoustic Guitar',
    "description": 'Acoustic, electro-acoustic and classical guitars, from leading brands.',
    "image"     :  'Acoustic'
},
{
    "name"     : "Electric Guitar",
    "description": "Ever-popular solid-body guitars, to hollow-body guitars and archtops.",
    "image"    :  "Electric"
},
{
    "name"     : "Bass Guitar",
    "description": "Classic Fender Bass, Precision and Jazz basses, to Gibson Thunderbirds.",
    "image"    :  "Bass"
}
    ]
}
);