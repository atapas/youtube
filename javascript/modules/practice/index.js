/**
 * Import Together and use
 */
import { sum, sub} from './calc.js'

console.log(sum(2,3));
console.log(sub(5,2));

/**
 * Using Aliases
 */
import { sum as add, sub as minus} from './calc.js'
console.log(add(2,3));
console.log(minus(2,3));

/**
 * Import as a Namespace
 */
import * as calc from "./calc.js";
// import all the functions in this file into an object called 'calc'.
let result = calc.sum(10 ,4); //result is now equal to 14;
console.log(result)

/**
 * DYNAMIC IMPORT 
 */

const {sayHi, sayHola} = await import('./greeting.js');

sayHi();
sayHola();

if(true) {
  const script = await import('./whoami.js');
  console.log(script.default)

  const func = script.default;
  console.log(func());
}

const promises = Promise.all([await import('./greeting.js'), await import('./whoami.js')]);

console.log(promises);

promises.then(result => {
  const sayHi = result[0].sayHi;
  sayHi();
})
