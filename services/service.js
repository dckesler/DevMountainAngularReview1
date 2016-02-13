/*SERVICE*/
/*SERVICE*/
angular.module("app").service("service", function() {

  var data;

  this.receive = function(input) {
    data = input;
  };

  this.send = function() {
    return data;
  }

});
