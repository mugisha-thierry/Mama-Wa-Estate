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
  private selectedCategory = new BehaviorSubject<string>('stores');
  category$: Observable<any>;
  category: string;
  categories$: Observable<any>;
  selectedCategory$ = this.selectedCategory.asObservable();
  closeResult: string;
  filteredCategories: any[] = [];
  specialization: any[] = [];
  
  
  constructor(private categoryService: CategoryService, route: ActivatedRoute, private router: Router, private modalService: NgModel) {
    this.categoryService.getCategories().subscribe(specialization => {
      this.specialization = specialization;
      console.log(this.specialization);
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredCategories = (this.category) ? this.specialization.filter(s => s.category === this.category) : this.specialization;
        console.log(this.filteredCategories);
        });
    });

    this.category$ = this.categoryService.getAll();
   }

  ngOnInit(): void {
  }

}
