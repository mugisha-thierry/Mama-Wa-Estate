import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { mergeMap, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  name = 'All Categories';
  private selectedCategory = new BehaviorSubject<string>('pharmacy');

  category$: Observable<any>;
  selectedCategory$ = this.selectedCategory.asObservable();
  categories$: Observable<any>;
  list : any;


  constructor() {
    this.categories$ = this.selectedCategory$
    .pipe(
      mergeMap(selectedCategory => this.list
                                       .categories$
                                       .pipe(map((category: any) => category[selectedCategory]))
     )
   );

// this.category$ = this.list.category$
//           .pipe(
//             tap((category: any) => this.selectedCategory.next('pharmacy')),
//             map(categoryObj => Object.keys(categoryObj).map((key,index) => categoryObj[key].name))
//            );
   }

  ngOnInit(): void {
  }

}
