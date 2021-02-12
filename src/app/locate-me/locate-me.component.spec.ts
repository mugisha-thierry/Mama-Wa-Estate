import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateMeComponent } from './locate-me.component';

describe('LocateMeComponent', () => {
  let component: LocateMeComponent;
  let fixture: ComponentFixture<LocateMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocateMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//this function is to get the current position
locateMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.showPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

//this is for plotting marker
showPosition(position) {
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;

  let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  this.map.panTo(location);

  if (!this.marker) {
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });
  }
  else {
    this.marker.setPosition(location);
  }
}

