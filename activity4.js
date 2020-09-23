/*
const R = require('ramda');

let double = x => x * 2;

let numbers = [1, 2, 3];

let arrayOfDoubles = R.map(double, numbers);

let affiche = x => console.log(x);

R.forEach(affiche, arrayOfDoubles);
*/

let _ = require('lodash');

let array = _.words("Demain dès l'aube, à l'heure où blanchit la campagne");

for (let word of array) {

    console.log(word);
}