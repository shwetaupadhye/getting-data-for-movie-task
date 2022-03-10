import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
url='http://localhost:3000/batman'
  constructor(private http: HttpClient) { }


  getListOfmovie() {
    return this.http.get(this.url);
  }

 
}
