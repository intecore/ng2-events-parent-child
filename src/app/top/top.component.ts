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

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  submitSearch(searchString: string) {
    let dataToEmit = {
      searchString: searchString
    };
    console.log('TopComponent: Emitting: ', dataToEmit);
    this.searchClick.emit(dataToEmit);
  }

}
