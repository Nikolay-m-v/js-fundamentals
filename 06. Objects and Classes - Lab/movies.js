"use strict";

function movies(array) {
  let moviesInfo = [];

  for (let element of array) {
    if (element.includes("addMovie")) {
      let movieName = element.split("addMovie ")[1];
      moviesInfo.push({ name: movieName });
    } else if (element.includes("directedBy")) {
      let movieInfo = element.split(" directedBy ");
      let name = movieInfo[0];
      let director = movieInfo[1];
      let movie = moviesInfo.find((element) => element.name === name);
      if (movie) {
        movie.director = director;
      }
    } else if (element.includes(" onDate ")) {
      let info = element.split(" onDate ");
      let name = info[0];
      let date = info[1];
      let movie = moviesInfo.find((element) => element.name === name);
      if (movie) {
        movie.date = date;
      }
    }
  }

  for (let movie of moviesInfo) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
