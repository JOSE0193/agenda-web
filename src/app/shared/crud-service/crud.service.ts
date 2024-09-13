import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';
import { CrudOperations } from './crud-operations';

export abstract class CrudService<T, ID> implements CrudOperations<T, ID>{

  constructor(
    protected http: HttpClient,
    @Inject(String) protected API_URL: string
  ) { }


  list(): Observable<T[]>{
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

  loadByID(id: ID): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post<T>(this.API_URL, record).pipe(take(1));
  }

  private update(record: T, id: ID) {
    return this.http.put<T>(`${this.API_URL}/${id}`, record).pipe(take(1));
  }

  save(record: T, id: ID): Observable<T> {
    if (id) {
      return this.update(record, id);
    }
    return this.create(record);
  }

  remove(id: ID): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
