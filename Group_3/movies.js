#!/usr/bin/node

let movieArray = [];

class Movie {
  constructor (title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;

    let inArray = false;
    for (let i = 0; i < movieArray.length; i++) {
      if (movieArray[i].title === title) {
        inArray = true;
      }
    }
    if (!inArray) {
      movieArray.push(this);
    }
  }
}

const MovieManager = (function () {
  movieArray = [
    new Movie('Braveheart', 'Mel Gibson', '1995'),
    new Movie('Mulan', 'Tony Bancroft', '1998'),
    new Movie('La Naranja Mecanica', 'Stanley Kubrick', '1971'),
    new Movie('Forrest Gump', 'Robert Zemeckis', '1994')
  ];

  function getMovieArray () {
    return movieArray;
  }

  function removeAllMovies () {
    movieArray.length = 0;
  }

  function getMovie (title) {
    for (let i = 0; i < movieArray.length; i++) {
      if (movieArray[i].title === title) {
        return movieArray[i];
      }
    }
    const newMovie = new Movie(title, null, null);
    return newMovie;
  }

  function deleteMovie (title) {
    for (let i = 0; i < movieArray.length; i++) {
      if (movieArray[i].title === title) {
        movieArray.splice(i, 1);
      }
    }
  }

  function searchMovie (queryString) {
    const movieArraySearch = [];
    const regex = new RegExp(queryString);
    for (let i = 0; i < movieArray.length; i++) {
      if (regex.test(movieArray[i].title)) {
        movieArraySearch.push(movieArray[i]);
      }
    }
    if (!movieArraySearch[0]) {
      return 'No movie found';
    }
    return movieArraySearch;
  }

  return {
    getMovieArray: getMovieArray,
    getMovie: getMovie,
    searchMovie: searchMovie,
    deleteMovie: deleteMovie,
    removeAllMovies: removeAllMovies
  };
})();

console.log('Testing singleton creation...');
const netflix = MovieManager;
const netflix2 = MovieManager;
console.log(netflix === netflix2);
console.log(netflix.getMovieArray());

console.log('\nTesting autoinsertion to array of new movie...');
const newMovieAutoInsert = new Movie('Hello', 'World', '2021');
console.log(newMovieAutoInsert);
console.log(netflix.getMovieArray());

console.log('\nTesting get existing movie...');
const peli = netflix.getMovie('Mulan');
console.log(peli);

console.log('\nTesting get non existing movie...');
const newPeli = netflix.getMovie('Titanic');
console.log(newPeli);
console.log(netflix.getMovieArray());

console.log('\nTesting duplicate insertion of movie...');
const newPeliDup = new Movie('Titanic', null, null);
console.log(newPeliDup);
console.log(netflix.getMovieArray());

console.log('\nTesting deletion of existing movie...');
console.log(netflix.getMovieArray());
netflix.deleteMovie('Titanic');
console.log(netflix.getMovieArray());

console.log('\nTesting deletion of non existing movie...');
console.log(netflix.getMovieArray());
netflix.deleteMovie('Titanic');
console.log(netflix.getMovieArray());

console.log('\nTesting search of movie...');
netflix.getMovie('Titanic');
netflix.getMovie('Titan');
console.log(netflix.getMovieArray());
console.log(netflix.searchMovie('Tit'));
console.log(netflix.searchMovie('Gu'));

console.log('\nTesting search of non existing movie...');
console.log(netflix.searchMovie('Mal'));
