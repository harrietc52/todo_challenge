describe('ToDoListController', function () {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var todo1 = {
    title: 'Make todo app'
  };

  var todo2 = {
    title: 'Call home'
  };

  it('initialises with empty todo term', function() {
    expect(ctrl.todo).toBeUndefined();
  });

  it('displays todos', function() {
    ctrl.todoTitle = 'Make todo app'
    expect(ctrl.showTodos()).toEqual([todo1]);
  });

  it('displays more than one todos', function() {
    ctrl.todoTitle = 'Make todo app';
    ctrl.showTodos();
    ctrl.todoTitle = 'Call home';
    ctrl.showTodos();
    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

});
