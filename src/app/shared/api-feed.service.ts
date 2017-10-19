import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiFeed {
  constructor (private http: Http) {}

  getFilms() {
    return this.http.get('https://swapi.co/api/films')
      .map((response: Response) => {
        var result = response.json();
        console.log(result);
        return result;
      })
  }

  getPeople() {
    return this.http.get('https://swapi.co/api/people')
      .map((response: Response) => {
        var result = response.json();
        console.log(result);
        return result;
      });
  }
}
