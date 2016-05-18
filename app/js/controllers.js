angular.module('app.controllers',['app.factory'])

// Main Controller
 .controller('mainCtrl', ['$scope', '$location', 'getVideos',function($scope, $location, getVideos){

var path = $location.path();
$scope.path = path.replace("/", "");


// Access factory and assign the returned data
getVideos.all()
.success(function(data) {
            $scope.entries = data;
            $scope.entries.reverse()

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  
  }])
  
 .controller('newVideo', ['$scope', '$location', 'newVideoFac',function($scope, $location, newVideoFac){

$scope.status = "";

// Submit function bound on "Submit" button on form
$scope.submit = function(form){

// Check if form is valid
if(form.$valid) {

// Debug: console.log("Form valid")

// Use Data-binding to build object to send to API
var formData = {

	videoLink: $scope.videoLink,
	hero: $scope.hero
	

}


// Call factory and submit the formData for processing
newVideoFac.create(formData)

 // If successful print returned message form API else print error
 .success(function(data) {



// Data binding on status to log API returned message
$scope.status = data.message;
console.log($scope.status);
})
 .error(function(data) {
 	console.log('Error: ' + data);
 });
}

}
  
  }]);
  
  
  
  
  
  
 