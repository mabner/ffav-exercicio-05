import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [CommonModule, HttpClientModule],
})
export class MoviesModule {}
