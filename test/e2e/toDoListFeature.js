describe('ToDoList', function() {

  var todos = element.all(by.repeater('todo in todoCtrl.todos'))
  
  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('displays a todo', function() {
    element(by.model('todoCtrl.todoTitle')).sendKeys('Call home');
    element(by.className('Add ToDo')).click();
    expect(todos.first().getText()).toEqual('Call home');
  });

});
