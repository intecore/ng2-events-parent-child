import { SearchCriteria, SearchStatus, DetailsSummary } from './models';

// TODO: Put in separate files
export class ErrorEvent {
  constructor(public errorList: string[]) {
  }
}

export class SearchCriteriaEvent {
  constructor(public searchCriteria: SearchCriteria) {
  }
}

export class SearchStatusEvent {
  constructor(public searchStatus: SearchStatus) {
  }
}

export class DetailsSummaryEvent {
  constructor(public detailsSummary: DetailsSummary) {
  }
}
