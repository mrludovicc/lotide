const titleCase = require('../titleCaseKata');
const assert = require('chai').assert;

describe('#titleCase', () => {
  it(' should return "This Is An Example" if passing "this is an example"', () => {
    assert.equal(titleCase("this is an example"), "This Is An Example")
  });

  it(' should return "Test" if passing "test"', () => {
    assert.equal(titleCase("test"), "Test")
  });

  it(' should return "What Happens Here" if passing "WHAT HAPPENS HERE"', () => {
    assert.equal(titleCase("WHAT HAPPENS HERE"), "What Happens Here")
  });

  it(' should return "A" if passing "A"', () => {
    assert.equal(titleCase("A"), "A")
  });

  it(' should return "" if passing ""', () => {
    assert.equal(titleCase(""), "")
  });

  it(' should return "I R Cool" if passing "i r cool"', () => {
    assert.equal(titleCase("i r cool"), "I R Cool")
  });
});





