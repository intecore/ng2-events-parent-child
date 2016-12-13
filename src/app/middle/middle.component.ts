import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit, OnDestroy, OnChanges {
  isLoading: boolean = false;
  searchResults: any[];
  @Input()
  searchCriteria: any;
  @Output()
  detailsClick = new EventEmitter<any>();
  @Output()
  searchStatus = new EventEmitter<any>();

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

  searchCustomers(searchCriteria: any) {
    console.log('MiddleComponent: Emitting: ', true);
    this.isLoading = true;
    this.searchStatus.emit({isSearching: true});
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
        this.searchStatus.emit({isSearching: false});
      }
    );
  }

  onClickDetails(detailSummary: any) {
    console.log('MiddleComponent: Emitting: ', detailSummary);
    this.detailsClick.emit(detailSummary);
  }
}
