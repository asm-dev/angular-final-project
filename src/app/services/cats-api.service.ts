import { Injectable, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
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
    return this.http.get<Cat[]>(`${this.BASE_URL}/cats`)
    .pipe(
      delay(1000)
    );    
  }

  getCatById(id: number): Observable<Cat> {
    return this.http.get<Cat>(`${this.BASE_URL}/cats/${id}`);
  }

  createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(`${this.BASE_URL}/cats`, cat)
  }

  deleteCatById(id: number): Observable<Cat> {
    return this.http.delete<Cat>(`${this.BASE_URL}/cats/${id}`)
  }

  updateCat(cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`${this.BASE_URL}/cats/${cat.id}`,cat)
  }
}
