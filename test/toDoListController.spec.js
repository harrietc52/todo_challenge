describe('ToDoListController', function () {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with empty todo term', function() {
    expect(ctrl.todoTerm).toBeUndefined();
  });

});
