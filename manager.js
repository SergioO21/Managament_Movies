#!/usr/bin/node
// Movie management module.

const store = require('./store');
const Movies = store.Movies;
const defaultMovies = store.defaultMovies;

class MoviesManager {
  removeAll () {
    const nbMovies = defaultMovies.length;

    for (let i = 0; i < nbMovies; i++) {
      defaultMovies.pop();
    }
  }

  deleteMovie (movieTitle) {
    let index = false;
    let i = 0;

    for (i = 0; i < defaultMovies.length; i++) {
      if (defaultMovies[i].title === movieTitle) {
        index = true;
        break;
      }
    }

    if (index === true) {
      defaultMovies.splice(i, 1);
    } else {
      console.log('Not exists');
    }
  }

  getMovie (movieTitle) {
    for (let i = 0; i < defaultMovies.length; i++) {
      if (defaultMovies[i].title === movieTitle) {
        return defaultMovies[i];
      }
    }
    new Movies(movieTitle);
    return defaultMovies[defaultMovies.length - 1];
  }

  searchMovie (queryString) {
    const movies = defaultMovies.filter(movies => movies.title.indexOf(queryString) !== -1);

    if (movies.length === 0) {
      new Movies(queryString);
      movies.push(defaultMovies[defaultMovies.length - 1]);
    }

    return movies;
  }
}

module.exports = MoviesManager;
