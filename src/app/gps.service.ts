import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpsService {
  http: HttpClient
  private user
  isUserChecked: boolean
  private searchedLong: string
  private searchedLat: string
  private searchLongChange: Subject<string> = new Subject<string>()
  private searchLatChange: Subject<string> = new Subject<string>()
  private LatChange: Subject<string> = new Subject<string>()
  private Lat: string;
  geolocation: any;


  constructor() { }
}
