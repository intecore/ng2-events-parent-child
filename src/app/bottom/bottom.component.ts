import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

import { CustomerService } from '../customer.service';
import { DetailsSummary } from '../models';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit, OnDestroy, OnChanges {
  isLoading = false;
  fullDetail: any;
  @Input()
  detailsSummary: DetailsSummary;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('BottomComponent destroyed');
  }

  ngOnChanges(changes: any) {
    console.log('BottomComponent: Detected changes: ', changes);
    const id = changes.detailsSummary.currentValue ? changes.detailsSummary.currentValue.id : '';

    if (id) {
        this.getDetails(id);
    }
    else {
      console.log('BottomComponent: Got empty changes');
      this.fullDetail = undefined;
    }
  }

  getDetails(id: string) {
    this.isLoading = true;
    this.fullDetail = undefined;

    console.log('BottomComponent: Getting full details...');
    this.customerService.getDetails(id).subscribe(
      fullDetailsFromBackend => {
        console.log('BottomComponent: Full details ', fullDetailsFromBackend);
        this.fullDetail = fullDetailsFromBackend;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('BottomComponent: Retrieving full customer details completed');
        this.isLoading = false;
      }
    );
  }
}
