import {Calculator} from "./es2015_export.js"

var calc = new Calculator();
var multiplyResult = calc.multiply(2,2);

console.log(`Calculator from import: calc.multiply(2,2) => ${multiplyResult}`);