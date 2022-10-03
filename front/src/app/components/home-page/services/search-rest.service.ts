import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, filter, map, Observable } from 'rxjs';
import { handleError } from '../../../shared/utils/http-handle-error';

const url = 'http://localhost:3000/api/events';

@Injectable({
  providedIn: 'root',
})
export class SearchRestService {

  constructor(private httpClient: HttpClient) {
  }

  searchEvents(searchTerm: string = null): Observable<Event[]> {
    return this.httpClient.get<Event[]>(`${url}/search?query=${searchTerm}`, { observe: 'response' })
      .pipe(
        catchError(handleError),
        filter((res: HttpResponse<Event[]>) => res.ok),
        map((res: HttpResponse<Event[]>) => res.body),
      );
  }
}
