import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { mergeMap, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   // URL which returns list of JSON items (API end-point URL)
   private readonly URL = 'http://localhost:4200/category';

  constructor(private http: HttpClient) { }
  
  resolveCategory(): Observable<any> {
    console.log('All Categories available!');
    return this.http.get(this.URL);
  }
}
