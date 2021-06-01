import { Component, Input, OnInit } from '@angular/core';
import { IMovieItem } from '../../models/IMovieItem';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input() movies: Array<IMovieItem> = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
