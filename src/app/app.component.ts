import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCriteria: any;
  detailsSummary: any;
  errorMsg: string = '';

  onSearchClick(data: any) {
    console.log('AppComponent: Received search criteria: ', data);
    this.errorMsg = '';

    if (data && data.searchString.trim().length == 0) {
      console.log('AppComponent: Form has error')
      this.errorMsg = 'Please specify a search criteria';
    }
    else {
      this.searchCriteria = data;
      this.detailsSummary = undefined;
    }
  }

  onDetailsClick(data: any) { 
    console.log('AppComponent: Received details summary: ', data);
    this.detailsSummary = data;
  }
}
