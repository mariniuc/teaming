import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  results: Observable<any[]>;

  constructor() {
  }

  getSearchResults() {
    return this.results;
  }
}
