describe('ToDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with empty todo term', function() {
    expect(ctrl.todoResult).toBeUndefined();
  });

  describe('when adding a todo', function() {
    var todos = [
      {
        'title': 'Build a todo app'
      }
    ];

    it('displays todos', function() {
      expect(ctrl.todoResult.todos).toEqual(todos)
    });
  });

});