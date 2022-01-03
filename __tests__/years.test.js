import Years from './../src/js/years.js';


describe('Years', ()=> {
  let year;
  beforeEach(()=> {
    year = new Years(25,90);
  });

  test('should create a Years object with age and lifeExpectancy', () => {
    expect(year.age).toEqual(25);
    expect(year.lifeExpectancy).toEqual(90);
  });

  test('should create users age in mercury years', () => {
    expect(year.mercuryAge(year.age)).toEqual(104.16666666666667);
  });

  test('should create a users age in venus years', () => {
    expect(year.venusAge(year.age)).toEqual(40.32258064516129);
  });

  test('should create a users age in mars years', () => {
    expect(year.marsAge(year.age)).toEqual(13.297872340425533);
  });

  test('should create a users age in jupiter years', () => {
    expect(year.jupiterAge(year.age)).toEqual(2.1079258010118043);
  });
  
});