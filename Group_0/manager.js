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
      console.log('The movie does not exists');
    }
  }

  getMovie (movieTitle) {
    for (let i = 0; i < defaultMovies.length; i++) {
      if (defaultMovies[i].title === movieTitle) {
        return defaultMovies[i];
      }
    }
    const movie = new Movies(movieTitle);
    console.log('=====> New movie created: <=====');
    console.log(movie);
    return movie;
  }

  searchMovie (queryString) {
    const movies = defaultMovies.filter(movies => movies.title.indexOf(queryString) !== -1);

    if (movies.length === 0) {
      const movie = new Movies(queryString);
      movies.push(movie);
    }

    return movies;
  }
}

module.exports = MoviesManager;
