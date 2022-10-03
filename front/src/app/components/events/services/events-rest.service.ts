import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Event} from "../event.model";
import {catchError, Observable} from "rxjs";
import { handleError } from '../../../shared/utils/http-handle-error';

const url = 'http://localhost:3000/api/events';

@Injectable({
  providedIn: 'root'
})
export class EventsRestService {

  constructor(private httpClient: HttpClient) {
  }

  getEvents(): Observable<HttpResponse<Event[]>> {
    return this.httpClient.get<Event[]>(url, { observe: 'response' })
  }

  createEvent(event: Event): Observable<HttpResponse<Event>> {
    return this.httpClient.post<Event>(url, event, { observe: 'response' })
      .pipe(catchError(handleError));
  }

  updateEvent(id: string, event: Event): Observable<HttpResponse<Event>> {
    return this.httpClient.patch<Event>(url + `/:${id}`, event,  { observe: 'response' })
      .pipe(catchError(handleError));
  }
}
