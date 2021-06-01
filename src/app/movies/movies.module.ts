import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieItemComponent
  ],
  imports: [CommonModule, HttpClientModule],
})
export class MoviesModule {}
