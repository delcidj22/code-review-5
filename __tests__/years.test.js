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

  test('should return users age here on earth', () => {
    expect(year.earthAge(year.age)).toEqual(25);
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

  test('should create an array of the users age on each solar planet', () => {
    expect(year.solarAge(year.age)).toEqual([25, 104.16666666666667, 40.32258064516129, 13.297872340425533, 2.1079258010118043]);
  });
  
  test('should return an array of how many years the user has left to live on each planet', () => {
    expect(year.solarExpectancy()).toEqual([65, 270.83333333333337, 104.83870967741936, 34.57446808510638, 5.480607082630692]);
  });

  test('should return how many years user has passed life expectancy', () => {
    const pastExpectancy = new Years(100,90)
    expect(pastExpectancy.solarExpectancy()).toEqual([10, 41.66666666666667, 16.129032258064516, 5.319148936170213, 0.8431703204047218]);   
  });
});