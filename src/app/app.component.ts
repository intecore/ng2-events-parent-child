import { Component } from '@angular/core';

import { ErrorEvent, SearchCriteriaEvent, DetailsSummaryEvent, SearchStatusEvent } from './events';
import { SearchCriteria, SearchStatus, DetailsSummary } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCriteria: SearchCriteria;
  detailsSummary: DetailsSummary;
  errorList: string[];
  searchStatus: SearchStatus = {
    isSearching: false
  };

  onSearchClickEvent(data: SearchCriteriaEvent) {
    console.log('AppComponent: Received SearchCriteriaEvent: ', data);
    this.errorList = undefined;
    this.searchCriteria = data.searchCriteria;
    this.detailsSummary = undefined;
  }

  onErrorEvent(data: ErrorEvent) {
    console.log('AppComponent: Received ErrorEvent: ', data);
    this.errorList = data.errorList;
  }

  onDetailsClickEvent(data: DetailsSummaryEvent) {
    console.log('AppComponent: Received DetailsSummaryEvent: ', data);
    this.detailsSummary = data.detailsSummary;
  }

  onSearchStatusEvent(data: SearchStatusEvent) {
    console.log('AppComponent: Received SearchStatusEvent: ', data);
    this.searchStatus = data.searchStatus;
  }
}
