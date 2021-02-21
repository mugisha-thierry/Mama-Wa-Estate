import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  products = []
  constructor(private _productService: ProductsService, private router:Router) { }

  ngOnInit(): void {
    // this._productService.getAllproducts()
    // .subscribe(
    //   res => this.products = res,
    //   err => console.log(err)
    // )
  }


  // selectProduct(id: Number) {
  //   this.router.navigate(['/product', id]).then();
  // }

  
}

