import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores = []

  constructor(private _storeService: StoreService, private router:Router) { }

  currentRate:number =3;
  ngOnInit() {
    this._storeService.getStores()
      .subscribe(
        res => this.stores = res,
        err => console.log(err)
      )
  }
  selectStore(id: Number) {
    this.router.navigate(['/singlestore', id]).then();
  }

}
