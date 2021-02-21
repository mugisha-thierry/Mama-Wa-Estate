import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id: number;
  product;
  constructor(private _productService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this._productService.getproduct(this.id).subscribe(prod => {
        this.product = prod;
      });
    });

  }
}

  // ngOnInit(): void {
  //   this.route.paramMap.pipe(
  //     map((param: ParamMap) => {
  //       // @ts-ignore
  //       return param.params.id;
  //     })
  // //   this._productService.getproduct(this.id)
  // //   .subscribe(
  // //     res => this.product = res,
  // //     err => console.log(err)
  // //   )
  // // }