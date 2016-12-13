import { Component } from '@angular/core';

import { SearchStatus } from './search-status.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCriteria: any;
  detailsSummary: any;
  errorList: string[];
  searchStatus: SearchStatus = {
    isSearching: false
  };

  onSearchClickEvent(data: any) {
    console.log('AppComponent: Received searchClick event: ', data);
    this.errorList = undefined;
    this.searchCriteria = data;
    this.detailsSummary = undefined;
  }

  onErrorEvent(data: any) {
    console.log('AppComponent: Received error event: ', data);
    this.errorList = data;
  }

  onDetailsClickEvent(data: any) {
    console.log('AppComponent: Received detailsClick event: ', data);
    this.detailsSummary = data;
  }

  onSearchStatusEvent(data: any) {
    console.log('AppComponent: Received searchStatus event: ', data);
    this.searchStatus = data;
  }
}
