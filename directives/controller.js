angular.module("app").controller("ctrl", function($scope) {
  $scope.remove = function(index) {
    $scope.persons.splice(index, 1)
    console.log($scope.persons);
  }

  $scope.search = {name: "u"};

  $scope.persons = [
    {
      name: "Dan",
      age: 26,
      occupation: "Guy"
    },
    {
      name: "Luis",
      age: 56,
      occupation: "Fruit vendor"
    },
    {
      name: "I woke up 7 seconds ago",
      age: 27,
      occupation: "Burrito eater"
    }
  ];

  $scope.showHide = true;
  $scope.toggle = function() {
    $scope.showHide = !$scope.showHide;
  }

  $scope.style = {
    background: "green"
  }

  $scope.options = [
    {label: "Fred", value: "fredericker99"},
    {label: "Dan", value: "Foxyroxy756"},
    {label: "Luis", value: "jajamana"},
    {label: "Jason", value: "birdz4lyfe"}
  ]

})
