describe('celebrity e2e tests', function() {
  it('should display 1 items', function() {
    browser.get('http://localhost:9000/#/');

    element(by.model('birthPlace')).sendKeys('Australia');
   // element(by.css('[value="add"]')).click();


   var table= element(by.css(".table-striped"));



    var persons= element.all(by.repeater('person in list'));
    //debugger;
    expect(persons.count()).toEqual(3);

    //
    //// You wrote your first test, cross it off the list
    //todoList.get(2).element(by.css('input')).click();
    //var completedAmount = element.all(by.css('.done-true'));
    //expect(completedAmount.count()).toEqual(2);
  });
});
