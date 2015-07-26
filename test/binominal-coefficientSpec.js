var binCoeff  = require('../src/binominal-coefficient');
var expect    = require('chai').expect;

describe('Binominal Coefficient', function() {
  it('should return 265182149218 as binominal coefficient for 43 above 16', function() {
    expect(binCoeff(43, 16)).to.equal(265182149218);
  });

  it('should return 75582 as binominal coefficient for 19 above 11', function() {
    expect(binCoeff(19, 11)).to.equal(75582);
  });

  it('should return 5200300 as binominal coefficient for 25 above 13', function() {
    expect(binCoeff(25, 13)).to.equal(5200300);
  });
});
