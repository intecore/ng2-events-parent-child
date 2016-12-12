import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output()
  searchClick = new EventEmitter<any>();
  @Output()
  error = new EventEmitter<any>();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  submitSearch(searchString: string) {
    if (searchString.trim().length === 0) {
      let errorList = [
        'You must specify something to search for',
        'Please fill out all required fields'
      ];
      console.log('TopComponent: Has error, emitting: ', errorList);
      this.error.emit(errorList);
    }
    else {
      let searchCriteria = {
        searchString: searchString
      };
      console.log('TopComponent: Emitting: ', searchCriteria);
      this.searchClick.emit(searchCriteria);
    }
  }
}
