import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import { FlashMessagesService } from 'ngx-flash-messages';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products =[]
   w:number;

  constructor(private flashMessagesService: FlashMessagesService,private _router: Router,private _cartProductsService:AddToCartService) { }

  ngOnInit(): void {
    this._cartProductsService.getCartProducts()
    .subscribe(
    res=>{
      this.products =res
      console.log(this.products.length)
    },
    err => console.log(err)
    )
  }
  sum(){
    let y:number = 0;
    let x:number;
    
    for(let i=0; i < this.products.length; i++){
      x = (this.products[i].quantity * this.products[i].subtotal);
      y = y + x;
    }
    return y
  }
  
  total(){
    let z:number;
    let w:number;
    z=this.sum();
    w=z+200;
    return w
  }


}
