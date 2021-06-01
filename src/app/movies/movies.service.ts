import { Injectable } from '@angular/core';
import { MoviesModule } from './movies.module';

@Injectable({
  providedIn: MoviesModule,
})
export class MoviesService {
  constructor() {}
}
