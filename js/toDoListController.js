todoList.controller('ToDoListController', [function() {

  var self = this;

  self.todoResult = {
    "todos": [
      {
        "title": "Build a todo app",
        "title": "Go to Joes"
      }
    ]
  };

  self.addToDo = function() {
    console.log('Todo is added')
  };
}]);
