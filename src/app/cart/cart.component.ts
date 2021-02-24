import { Component, OnInit, Inject } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { FlashMessagesService } from 'ngx-flash-messages';
<<<<<<< HEAD
=======
// import { totalmem } from 'os';
>>>>>>> 3e535169411e6959bab9756d82e443c97dd60c0b

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
<<<<<<< HEAD
=======
  [x: string]: any;
>>>>>>> 3e535169411e6959bab9756d82e443c97dd60c0b
  body=[]
  products =[]
  constructor(@Inject(DOCUMENT) private _document: Document,private flashMessagesService: FlashMessagesService,private _router: Router,private _cartProductsService:AddToCartService) { }

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
  deleteFromCart(id:number){
    this._cartProductsService.deleteCart(id)
    .subscribe(
      res=>{
      console.log('ok')
      this.refreshPage()
<<<<<<< HEAD
      this.flashMessagesService.show('Product successful', {
=======
      this.flashMessagesService.show('Product successful deleted', {
>>>>>>> 3e535169411e6959bab9756d82e443c97dd60c0b
        classes: ['alert', 'alert-success'], // You can pass as many classes as you need
        timeout: 5000, // Default is 3000
      });
      },
      err=>console.log(err)
    )
    
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }
  calculate(x:number,y:number){
<<<<<<< HEAD
    return x*y
=======
    let total:Number;
    total = x*y;
    return total
  
>>>>>>> 3e535169411e6959bab9756d82e443c97dd60c0b
  }
  update(id:number){
    this._cartProductsService.updateQty(id,this.body)
    .subscribe(
      res=>{
      console.log('ok')

      },
      err=>console.log(err)
    )
    
  }

}
