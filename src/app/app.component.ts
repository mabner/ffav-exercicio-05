import { Component } from '@angular/core';
import { IMovieItem } from './movies/models/IMovieItem';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Exercicio 05 - Movies App';
  movies: Array<IMovieItem> = [];
  movieList = [];
  findMovie(title) {
    const results = this.movies.filter((movie) =>
      movie.title.startsWith(title)
    );
    if (results.length > 0) {
      this.movieList = results;
    } else {
      this.movieList = this.movies;
    }
  }
}
