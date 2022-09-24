import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Event} from "../event.model";
import {catchError, map, Observable, throwError} from "rxjs";

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
      .pipe(catchError(this.handleError));
  }

  updateEvent(id: string, event: Event): Observable<HttpResponse<Event>> {
    return this.httpClient.patch<Event>(url + `/:${id}`, event,  { observe: 'response' })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
