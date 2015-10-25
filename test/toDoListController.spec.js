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

  it('todo is not done when created', function() {
    ctrl.todoTitle = 'Call home';
    ctrl.addTodo();
    expect(ctrl.todoDone(0)).toBeUndefined;
  });

  it('todo knows when it is done', function() {
    ctrl.todoTitle = 'Call home';
    ctrl.addTodo();
    ctrl.todos[0].done = true;
    expect(ctrl.todoDone(0)).toBe('done');
  });

  it('todo input box is cleared', function() {
    ctrl.todoTitle = 'Call home';
    ctrl.addTodo();
    ctrl.clearForm();
    expect(ctrl.todoTitle).toBeNull()
  })

  it('clear button removed done todos', function() {
    ctrl.todoTitle = 'Make todo app';
    ctrl.showTodos();
    ctrl.todoTitle = 'Call home';
    ctrl.showTodos();
    ctrl.todos[0].done = true;
    ctrl.clearDone()
    expect(ctrl.todos).toEqual([todo2])
  });

});
