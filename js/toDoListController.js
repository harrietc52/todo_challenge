todoList.controller('ToDoListController', [function() {

  var self = this;

  self.todos = []

  self.showTodos = function() {
    self.addTodo(self.todoTitle);
    return self.todos
  }

  self.addTodo = function(todoTitle) {
    self.todos.push({
      title: todoTitle
    })
  }

}]);
