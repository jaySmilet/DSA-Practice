// Import stylesheets
import './style.css';
const { fun } = require('./Array/even-positions-are-greater-than-odd.js');

// Write Javascript code!
const appDiv = document.getElementById('app');
// let a = [2, 3, 1, 22, 67, 45, 21, 0];
let a = [1, 3, 2, 2, 5];
appDiv.innerHTML = fun(a, a.length);
