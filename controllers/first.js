app.controller('myCtrl', ['$scope', 'firstService', '$location', function ($scope, firstService, $location) {
  $scope.subjects = [];
  $scope.subjects = "hai this subjects"
  $scope.home = "hai this home"
  $scope.start = "hai this start"
  $scope.wrong = false;

  $scope.handleChange = function (name) {
    $scope.name = "chenna kesava"
    $scope.stu = "yuva"
  }

  firstService.getRequest().then(function (data) {
    $scope.subjects = data;

    $scope.submit = function () {
      $scope.username;
      $scope.password;
      $scope.wrong;
      if ($scope.username == "yuva" && $scope.password == "yuva123") {
        $location.path('/home');
      } else {
        document.getElementById('a').innerHTML = "User name or Password is worng...!"
      }
    };
  });



  $scope.names = [];
  $scope.todoList, $scope.country, $scope.Email;

  $scope.add = function (t, c, E) {
    if (t && c && E) {
      $scope.names.push({
        key: $scope.todoList,
        value: $scope.country,
        Email: $scope.Email
      });
      $scope.todoList = "";
      $scope.country = "";
      $scope.Email = "";
    } else{
      $scope.error =!$scope.error
      $scope.error = "pls enter the fields...";
    }
    console.log("Array", $scope.names);

  }
 

$scope.remove= function(){
  $scope.names.splice(0, 1);
}

  $scope.clearAll = function () {
    $scope.names = []
  }

  $scope.showMe=false;
  $scope.filters = function(){
    $scope.showMe = !$scope.showMe;
  }

}]);