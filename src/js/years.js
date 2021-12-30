export default class Years {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
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

}