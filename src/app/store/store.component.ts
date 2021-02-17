import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores = []

  constructor(private _storeService: StoreService) { }

  ngOnInit() {
    this._storeService.getStores()
      .subscribe(
        res => this.stores = res,
        err => console.log(err)
      )
  }

}
