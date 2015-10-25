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
    console.log(self.todos)
  }

  self.todoDone = function(index) {
    if (self.todos[index].done) {
      return 'done'
    }
  }

  self.clearForm = function() {
    self.todoTitle = null;
  }

  self.clearDone = function() {
    self.todos = self.todos.filter(function(todo){
      return !todo.done
    })
  }

}]);
