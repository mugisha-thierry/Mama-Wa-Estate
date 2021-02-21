import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-singlestore',
  templateUrl: './singlestore.component.html',
  styleUrls: ['./singlestore.component.css']
})
export class SinglestoreComponent implements OnInit {

  id: number;
  store;
  products = []
  constructor(private _productService: ProductsService,private _storeService: StoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this._storeService.getstore(this.id).subscribe(prod => {
        this.store = prod;
      });
    });
    
    this._productService.getAllproducts()
    .subscribe(
      res => this.products = res,
      err => console.log(err)
    )

  }
    selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}