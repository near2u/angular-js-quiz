var app = angular.module('myApp', []);
app.controller("sample",function($scope,$http){
	
	$scope.username="TEST";
	$scope.obj = [];
	$scope.obj1 = [];
	$scope.ans1={};
	$scope.ans2={};
	
	$scope.nn={};
	$scope.last={};
	$scope.ans1.correct=false;

	//var ff = ans.concact(ans1);
	// Add 
	$scope.okz= function(){
		
		$scope.ans2 = {text:$scope.ans1.text,correct:$scope.ans1.correct};
		$scope.obj.push($scope.ans2);
		$scope.checked = true;
		$scope.nn={que:$scope.ques,answers:$scope.obj};
		$scope.ans1.text='';
		$scope.ans1.correct=false;
		
	};

	// Show Answers
	$scope.showans = function($http){
		$scope.obj1.push($scope.nn);
		$scope.last={quiz_id:1,questions:$scope.obj1};

		/*$http(
				uri:"http://google.com",
				method:'GET'
			).then(function(resp){

		},function(resp){

		});*/

	};


	



});