export default class Years {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  earthAge(age) {
    return age;
  }

  mercuryAge(age) {
    return age / .24;
  }

  venusAge(age) {
    return age / .62;
  }

  marsAge(age) {
    return age / 1.88;
  }

  jupiterAge(age) {
    return age / 11.86
  }

  solarAge() {
    const earth = this.earthAge(this.age);
    const mercury = this.mercuryAge(this.age);
    const venus = this.venusAge(this.age);
    const mars = this.marsAge(this.age);
    const jupiter = this.jupiterAge(this.age);

    return [earth, mercury, venus, mars, jupiter];
  }

  solarExpectancy() {
    let extraYears = this.lifeExpectancy - this.age;

    let earth = this.earthAge(extraYears);
    let mercury = this.mercuryAge(extraYears);
    let venus = this.venusAge(extraYears);
    let mars = this.marsAge(extraYears);
    let jupiter = this.jupiterAge(extraYears);
    let planets = [earth, mercury, venus, mars, jupiter];
    if(extraYears < 0){
      for(let i=0; i <planets.length; i++){
        planets[i] *= -1;
      }
    }
    return planets;

  }

}