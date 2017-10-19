import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ApiFeed} from "../shared/api-feed.service";
import 'rxjs/Rx';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class peopleComponent implements OnInit {
  loading: boolean;
  closeResult: string;
  @Input()
    people: Observable<any>;

  constructor( public apiFeed: ApiFeed, private modalService: NgbModal) {
    this.people = this.apiFeed.getPeople();
  }

  ngOnInit() {
    // Load data from server
    this.loading = true;

    this.apiFeed.getPeople().delay(1000).subscribe(
      requestData => {
        // Data loaded
        this.loading = false;
      }
    )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
