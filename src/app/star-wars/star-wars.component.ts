import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiFeed} from "../shared/api-feed.service";
import 'rxjs/Rx';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.scss']
})
export class StarWarsComponent implements OnInit {
  title: string = "Start Wars movies"
  loading: boolean;
  films: Observable<any>;

  constructor( public apiFeed: ApiFeed) {
    this.films = this.apiFeed.getFilms();
  }

  ngOnInit() {
    // Load data from server
    this.loading = true;

    this.apiFeed.getFilms().delay(1000).subscribe(
      requestData => {
        // Data loaded
        this.loading = false;
      }
    )
  }

}
