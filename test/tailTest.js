const assertEqual = require('../assertEqual')
const tail = require('../tail')
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(tail(words), ["Lighthouse", "Labs"]);