import { Injectable } from '@angular/core';
import { Movie } from './../models/movie.model';
import { movieList } from '../examples';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MovieService {

  private movieList: Movie[];


constructor() { 

  this.movieList = movieList.map((movie) => {
    return new Movie(
      movie.id,
      movie.name,
      movie.director,
      movie.imageUrl,
      movie.duration,
      movie.releaseDate,
      movie.genres 
    );
  });
}  

public getMovies(): Observable<Movie[]> {
  return Observable.of(this.movieList);
}
}
