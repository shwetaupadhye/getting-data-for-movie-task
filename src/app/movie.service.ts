import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  getMovies() {
    return this.http.get<any>("http://localhost:5000/movies")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
