import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCriteria: any;
  detailsSummary: any;
  errorList: string[];

  onSearchClickEvent(data: any) {
    console.log('AppComponent: Received search criteria: ', data);
    this.errorList = undefined;
    this.searchCriteria = data;
    this.detailsSummary = undefined;
  }

  onErrorEvent(data: any) {
    console.log('AppComponent: Received error list: ', data);
    this.errorList = data;
  }

  onDetailsClickEvent(data: any) {
    console.log('AppComponent: Received details summary: ', data);
    this.detailsSummary = data;
  }
}
