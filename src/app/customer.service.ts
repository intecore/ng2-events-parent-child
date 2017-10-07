import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SearchCriteria, DetailsSummary } from './models';

@Injectable()
export class CustomerService {

  constructor(private http: Http) {
  }

  searchCustomers(searchCriteria: SearchCriteria): Observable<DetailsSummary[]> {
    console.log('CustomerService: Received search criteria ', searchCriteria);

    return this.http.get('api/customers')
      .map((response) => {
        const retList = response.json().data.map(element => {
          return {
            id: element.id,
            firstName: element.firstName
          };
        });

        return retList;
      }
    );
  }

  getDetails(id: string): Observable<any> {
    return this.http.get(`api/customers/${id}`).map(response => response.json().data);
  }

}
