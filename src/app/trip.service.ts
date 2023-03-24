import { Injectable } from '@angular/core';
import { Trip } from 'src/trip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TripService {
  trips:Trip[]=[];
  private url = 'http://localhost:3000/trips';

  constructor(private http: HttpClient) { }


  getTripsAsynch():Observable<Trip[]>{
    //return of(this.zadania);
    return this.http.get<Trip[]>(this.url);
  }

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url)
    .pipe(
    catchError(this.handleError<Trip[]>('getOrders', []))
    );
    }

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    console.error(operation + ' failed' + error);
    return of(result as T);
    };
    }

    addTrip(trip: Trip): Observable<Trip> {
      const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      return this.http.post<Trip>(this.url, trip, httpOptions)
      .pipe(
      catchError(this.handleError<Trip>('addTrip'))
      );
      }


    deleteTrip(id:number):Observable<Trip>{
      const newUrl = `${this.url}/${id}`;
      return this.http.delete<Trip>(newUrl);
    }

    editTrip(trip: Trip): Observable<Trip> {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      const newUrl = `${this.url}/${trip.id}`;
      return this.http.put<Trip>(newUrl, trip, httpOptions)
        .pipe(
          catchError(this.handleError('updateTrip', trip))
        );
    }

    getTrip(id: number): Observable<Trip> {
      // For now, assume that a hero with the specified `id` always exists.
      // Error handling will be added in the next step of the tutorial.
      const trip = this.trips.find(h => h.id === id)!;
      return of(trip);
    }

}
