const assert = require('chai').assert
const assertEqual = require('../assertEqual')
const tail = require('../tail')

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]);




describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"]) for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});
