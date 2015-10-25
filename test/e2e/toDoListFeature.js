describe('ToDoList', function() {

  var inputBox = element(by.model('todoCtrl.todoTitle'))
  var addButton = element(by.className('btn'))
  var todos = element.all(by.repeater('todo in todoCtrl.todos'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('todo');
  });

  // it('displays a todo', function() {
  //   element(by.model('todoCtrl.todoTitle')).sendKeys('Call home');
  //   element(by.className('Add')).click();
  //   expect(todos.first().getText()).toEqual('Call home');
  // });

  it('find todos', function() {
    inputBox.sendKeys('hello');
    addButton.click();
    expect(todos.get(0).getText()).toEqual('hello');
  });

});
