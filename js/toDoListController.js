todoList.controller('ToDoListController', [function() {

  var self = this;

  self.addToDo = function (){
    self.todoResult = {
      "todos": [
        {
          "title": "Build a todo app"
        }
      ]
    };
  };

}]);
