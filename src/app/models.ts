// TODO: Put in separate files
export class SearchCriteria {
  constructor(public searchString: string) {
  }
}

export class SearchStatus {
  constructor(public isSearching: boolean) {
  }
}

export class DetailsSummary {
  constructor(public id: string, public firstName: string) {
  }
}
