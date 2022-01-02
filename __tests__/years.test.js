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
    expect(year.mercuryAge(year.age)).toEqual(104.1667);
  });
  
});