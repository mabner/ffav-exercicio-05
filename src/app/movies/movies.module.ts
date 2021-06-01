import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MoviesService } from './movies.service';

@NgModule({
  declarations: [MoviesListComponent, MovieItemComponent],
  exports: [MoviesListComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService],
})
export class MoviesModule {}
