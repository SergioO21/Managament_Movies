#!/usr/bin/node
// Testing.

const store = require('./store');
const MoviesManager = require('./manager');
const Movies = store.Movies;
const defaultMovies = store.defaultMovies;

const Manager = new MoviesManager();
new Movies('Jurassic Park', 'Sergio Orejarena', '1990');
new Movies('The Dead Pool', 'Mathew Albinson', '2014');
new Movies('Phineas y Ferb', 'Duvan Rodelo', '2021');
new Movies('Guillame Terror', 'Jaime Blanco', '2018');
console.log('==================== ALL MOVIES ====================\n');
console.log(defaultMovies);

console.log('------------------------------------------------------------');
Manager.removeAll();
console.log('==================== ALL MOVIES ====================\n');
console.log(defaultMovies);

console.log('------------------------------------------------------------');
new Movies('Jurassic Park', 'Sergio Orejarena', '1990');
new Movies('The Dead Pool', 'Mathew Albinson', '2014');
new Movies('Phineas y Ferb', 'Duvan Rodelo', '2021');
new Movies('Guillame Terror', 'Jaime Blanco', '2018');
console.log('==================== ALL MOVIES ====================\n');
console.log(defaultMovies);

console.log('------------------------------------------------------------');
Manager.deleteMovie('Guillame Terror');
Manager.deleteMovie('Holberton');
Manager.deleteMovie('Jurassic Park');
console.log('------------------------------------------------------------');
console.log('==================== ALL MOVIES ====================\n');
console.log(defaultMovies);

console.log('------------------------------------------------------------');
let movie1 = Manager.getMovie('Phineas y Ferb');
let movie2 = Manager.getMovie('Holberton School');
const movie3 = Manager.getMovie('The Dead Pool');
const movie4 = Manager.getMovie('The Demon Carcagi');
console.log('==================== MOVIES RETURNED ====================\n');
console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4);

console.log('------------------------------------------------------------');
console.log('==================== ALL MOVIES ====================\n');
console.log(defaultMovies);

console.log('------------------------------------------------------------');
console.log('==================== SEARCHING WITH LETTER "A" ====================\n');
movie1 = Manager.searchMovie('a');
console.log(movie1);

console.log('------------------------------------------------------------');
console.log('==================== SEARCHING WITH LETTER "O" ====================\n');
movie1 = Manager.searchMovie('o');
console.log(movie1);

console.log('------------------------------------------------------------');
console.log('==================== DR. EVIL & MINI ME ====================\n');
movie1 = Manager.searchMovie('Carlos');
movie2 = Manager.searchMovie('JuanMa');
console.log(movie1);
console.log(movie2);

console.log('------------------------------------------------------------');
console.log('==================== ALL MOVIES ====================\n');
console.log(defaultMovies);
