import { Component, OnInit } from '@angular/core';
import { SearchRestService } from '../services/search-rest.service';
import { debounceTime, distinctUntilChanged, filter, map, Observable, retry, startWith, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  results: Observable<any[]>;
  search: FormControl = new FormControl('');

  constructor(private searchRestService: SearchRestService) {
    this.initSearch();
  }

  ngOnInit(): void {
  }

  private initSearch() {
    this.results = this.search.valueChanges.pipe(
      map((search) => search.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      filter((search) => search !== ''),
      switchMap((search) => this.searchRestService.searchEvents(search).pipe(
        retry(3),
        startWith([]),
      )),
    );
  }
}
