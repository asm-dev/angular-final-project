import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Cat } from '../models/cat.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsAPIService {

  readonly BASE_URL = 'http://localhost:8000';
 
  constructor(private http: HttpClient) { }
 
  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(`${this.BASE_URL}/cats`).pipe(
      delay(3000)
    );
  }
}
