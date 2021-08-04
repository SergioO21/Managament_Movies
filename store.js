#!/usr/bin/node
// Movie creation and storage module.

const defaultMovies = [];

class Movies {
  constructor (title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;

    defaultMovies.push({ title: this.title, director: this.director, year: this.year });
  }
}

module.exports = { Movies: Movies, defaultMovies: defaultMovies };
