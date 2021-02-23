import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { AddToCartService } from '../add-to-cart.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singlestore',
  templateUrl: './singlestore.component.html',
  styleUrls: ['./singlestore.component.css']
})
export class SinglestoreComponent implements OnInit {

  id: number;
  store;
  products = []
  data:any={}
  constructor(private _router: Router,private _authService: AuthService,private flashMessagesService: FlashMessagesService,private _addTo:AddToCartService, private _productService: ProductsService,private _storeService: StoreService, private route: ActivatedRoute, private router: Router) { }

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
  
  AddToCart(id:number){
    if (this._authService.loggedIn()){
    this._addTo.Add(id,this.data)
    .subscribe(
      res=>{
        this.flashMessagesService.show('Product added to cart', {
          classes: ['alert', 'alert-success'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
      },
      err=>{
        this.flashMessagesService.show('Error', {
          classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
          timeout: 5000, // Default is 3000
        });
      }
    )
    }
    else{
      this._router.navigate(['/login'])
      console.log('login first')
      
    }
  }
}