describe('ToDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with empty todo term', function() {
    // expect(ctrl.todoResult).toBeUndefined();
    expect(ctrl.todoAdd).toBeUndefined();

});
  });

describe('when adding a todo', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  var todos = [
    {
      'title': 'Build a todo app',
      'title': 'Go to Joes'
    }
  ];

  it('displays todos', function() {
    expect(ctrl.todoResult.todos).toEqual(todos);
  });
});
