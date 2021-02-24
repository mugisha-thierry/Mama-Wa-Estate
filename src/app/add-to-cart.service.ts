import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  data:any;
  private url = "http://127.0.0.1:8000/api/";
  private cartUrl = "http://127.0.0.1:8000/api/cartproduct/"
  private deleteUrl= "http://127.0.0.1:8000/api/"
  constructor(private http: HttpClient) { }

  Add(id: Number,data){
    return this.http.post<any>(this.url+ 'add-to-cart/' + id+'/',data);
  }
  getCartProducts(){
    return this.http.get<any>(this.cartUrl)
  }
  deleteCart(id:number){
    return this.http.delete<any>(this.deleteUrl+'cartproduct/'+id)
  }
  updateQty(id:number,body){
    return this.http.put<any>(this.url+ 'cartproduct/' + id+'/',body,{
      headers:new HttpHeaders({
         'content-Type':'application/json'
      })
    })
  }
}
