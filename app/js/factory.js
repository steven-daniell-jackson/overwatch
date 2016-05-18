angular.module('app.factory', [])

.factory('getVideos', function($http){

	var videoFac = {};

// Create get factory to retrieve data from api
	videoFac.all = function(location){
		return	$http.get('http://localhost:3000/api/videos');
	}

	return	videoFac;

})

.factory('newVideoFac', function($http){

	var videoFac = {};

// Create post factory to post data to api
	videoFac.create = function(videoData){

		return	$http.post('http://localhost:3000/api/new-video',videoData)
	}
return	videoFac;

})

