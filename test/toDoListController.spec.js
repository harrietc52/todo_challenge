describe('ToDoListController', function () {

  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var todo1 = {
    title: 'Make todo app'
  }

  it('initialises with empty todo term', function() {
    expect(ctrl.todo).toBeUndefined();
  });

  it('displays todos', function() {
    ctrl.todoTitle = 'Make todo app'
    expect(ctrl.showTodos()).toEqual([todo1]);
  });

});
