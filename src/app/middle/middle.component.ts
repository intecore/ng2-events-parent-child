import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';
import { SearchStatusEvent, DetailsSummaryEvent } from '../events';
import { SearchCriteria, SearchStatus, DetailsSummary } from '../models';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit, OnDestroy, OnChanges {
  isLoading = false;
  searchResults: DetailsSummary[];
  @Input()
  searchCriteria: SearchCriteria;
  @Output()
  detailsClick = new EventEmitter<DetailsSummaryEvent>();
  @Output()
  searchStatus = new EventEmitter<SearchStatusEvent>();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('MiddleComponent destroyed');
  }

  ngOnChanges(changes: any) {
    console.log('MiddleComponent: Detected changes: ', changes);

    if (changes.searchCriteria.currentValue) {
        console.log('MiddleComponent: Will search with search criteria: ', changes.searchCriteria.currentValue);
        this.searchCustomers(changes.searchCriteria.currentValue);
    }
    else {
      console.log('MiddleComponent: Got empty changes');
      this.searchResults = undefined;
    }
  }

  searchCustomers(searchCriteria: SearchCriteria) {
    const searchStatusEvent = new SearchStatusEvent(new SearchStatus(true));
    console.log('MiddleComponent: Emitting: ', searchStatusEvent);
    this.isLoading = true;
    this.searchStatus.emit(searchStatusEvent);
    this.searchResults = undefined;

    console.log('MiddleComponent: Searching...');
    this.customerService.searchCustomers(searchCriteria).subscribe(
      searchResults => {
        console.log('MiddleComponent: Got search results from server');
        console.log('MiddleComponent: Search results ', searchResults);
        this.searchResults = searchResults;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('MiddleComponent: Searching of customers completed');
        this.isLoading = false;
        this.searchStatus.emit(new SearchStatusEvent(new SearchStatus(false)));
      }
    );
  }

  onClickDetails(detailSummary: DetailsSummary) {
    const detailsSummaryEvent = new DetailsSummaryEvent(detailSummary);
    console.log('MiddleComponent: Emitting: ', detailsSummaryEvent);
    this.detailsClick.emit(detailsSummaryEvent);
  }
}
