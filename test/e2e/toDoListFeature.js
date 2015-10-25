describe('ToDoList', function() {

  var inputBox = element(by.model('todoCtrl.todoTitle'))
  var addButton = element(by.className('btn'))
  var todos = element.all(by.repeater('todo in todoCtrl.todos'))
  var checkBox = element(by.id('checkbox0'))
  var deleteDone = element(by.className('deletebtn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('todo');
  });

  it('displays a todo', function() {
    inputBox.sendKeys('Call home');
    addButton.click();
    expect(todos.get(0).getText()).toEqual('Call home');
  });

  it('displays multiple todos', function() {
    inputBox.sendKeys('Call home');
    addButton.click();
    inputBox.clear();
    inputBox.sendKeys('Finish app');
    addButton.click();
    expect(todos.getText()).toEqual(['Call home', 'Finish app']);
  });

  it('displays is todo is done with checkbox', function() {
    inputBox.sendKeys('Call home');
    addButton.click();
    checkBox.click();
    expect(checkBox.isSelected()).toBe(true);
  });

  it('can delete done todos', function() {
    inputBox.sendKeys('Call home');
    addButton.click();
    checkBox.click();
    inputBox.clear();
    inputBox.sendKeys('Finish app');
    addButton.click();
    deleteDone.click();
    expect(todos.getText()).toEqual(['Finish app']);
  });

});
