import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Observable<any[]> {
    return this.db.list('/categories')
    .snapshotChanges().pipe(
      map(actions =>
        actions.map(data => ({ key: data.key, ...data.payload.val() }))
    ));
  }

  getAll(): Observable<any[]> {
    return this.db.list('/category')
    .snapshotChanges().pipe(
      map(category =>
        category.map(cat => {
            const key = cat.key;
            const payload = cat.payload.val();
            return { key, ...payload };
          })),
        );
  }


  constructor() { }
}
