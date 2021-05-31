import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Exercicio 04 - Movies App';
  movies = [
    {
      title: 'Um Sonho de Liberdade',
      release: '1994',
      coverURL:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg',
    },
    {
      title: 'O Poderoso Chefão',
      release: '1972',
      coverURL:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
    },
    {
      title: 'O Poderoso Chefão II',
      release: '1974',
      coverURL:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg',
    },
    {
      title: 'Batman: O Cavaleiro das Trevas',
      release: '2008',
      coverURL:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg',
    },
    {
      title: '12 Homens e uma Sentença',
      release: '1957',
      coverURL:
        'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg',
    },
    {
      title: 'A Lista de Schindler',
      release: '1993',
      coverURL:
        'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg',
    },
  ];
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
