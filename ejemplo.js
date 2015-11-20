describe('angularjs homepage', function() {
  beforeEach(function() {
    browser.get('http://www.thetestroom.com/jswebapp/');
    /*element(by.model('person.name')).sendKeys('Daniel');
    var textoSalida = element(by.binding('person.name'));
    expect(textoSalida.getText()).toEqual('Daniel');
    element(by.id("continue_button")).click();
    browser.sleep(1000);
    element(by.cssContainingText('option', 'George the Turtle')).click();
    element(by.id("continue_button")).click();*/
//    browser.sleep(5000);

//    expect(browser.getCurrentUrl()).toContain('jswebapp');


    //element(by.model("animal")).

  });

  it('debe mostrar el nombre escrito', function() {
    element(by.model('person.name')).sendKeys('Daniel');
    var textoSalida = element(by.binding('person.name'));
    expect(textoSalida.getText()).toEqual('Daniel');
  });


  it('debe seleccionar un animal de la pantalla animales', function() {
    element(by.id("continue_button")).click();

    browser.sleep(1000);

    element(by.cssContainingText('option', 'George the Turtle')).click();

    element(by.id("continue_button")).click();
  });

});
