import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';
import { ErrorEvent, SearchCriteriaEvent } from '../events';
import { SearchCriteria, SearchStatus } from '../models';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @Output()
  searchClick = new EventEmitter<SearchCriteriaEvent>();
  @Output()
  error = new EventEmitter<ErrorEvent>();
  @Input()
  searchStatus: SearchStatus;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  submitSearch(searchString: string) {
    if (searchString.trim().length === 0) {
      const errorList = [
        'You must specify something to search for',
        'Please fill out all required fields'
      ];
      console.log('TopComponent: Has error, emitting: ', errorList);
      this.error.emit(new ErrorEvent(errorList));
    }
    else {
      const searchCriteriaEvent = new SearchCriteriaEvent(new SearchCriteria(searchString));
      console.log('TopComponent: Emitting: ', searchCriteriaEvent);
      this.searchClick.emit(searchCriteriaEvent);
    }
  }
}
