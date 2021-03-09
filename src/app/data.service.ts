import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ItemInterface} from './interfaces/item-interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: ItemInterface[];

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get('../../assets/mock-data/data.json');
  }

  getSearchItems(search: string): Observable<ItemInterface[]> {
    return of(this.items).pipe(
      map(d => d.filter((item) => (item.name.toLowerCase().indexOf(search.toLowerCase()) > -1)))
    );
  }
}
