import { Component, OnInit } from '@angular/core';

declare var Map: MapConstructor;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category$;
  category: string;
  closeResult: string;
  filteredCategories: any[] = [];
  specialization: any[] = [];
  
  
  constructor(private categoryService: CategoryService) {
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
