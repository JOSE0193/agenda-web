import { Observable } from "rxjs";

export interface CrudOperations<T, ID>{

  save(record: T, id: ID): Observable<T>;
  loadByID(id: ID): Observable<T>;
  list(): Observable<T[]>;
  remove(id: ID): Observable<any>;

}
