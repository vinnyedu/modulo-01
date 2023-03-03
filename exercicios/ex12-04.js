'use strict';

/* 
  
*/

const prompt = require('prompt-sync')({ sigint: true });
console.clear();


function passos(x = 5, y = 40, z = 1) {
  let inicio = x,
    passos = 0;
  for (x; x < y; x += z) {
    inicio += y;
    passos++;
  }
  return passos;
}
console.log(passos());
console.log(passos(1, 50, 7));