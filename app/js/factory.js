angular.module('app.factory', [])

.factory('getVideos', function($http){

	var videoFac = {};

// Create get factory to retrieve data from api
	videoFac.all = function(location){
		return	$http.get('http://boiling-mesa-13925.herokuapp.com/api/videos');
	}

	return	videoFac;

})

.factory('newVideoFac', function($http){

	var videoFac = {};

// Create post factory to post data to api
	videoFac.create = function(videoData){

		return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/new-video',videoData)
	}
return	videoFac;

})

