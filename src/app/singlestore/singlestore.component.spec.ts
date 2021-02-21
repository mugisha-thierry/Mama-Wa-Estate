import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestoreComponent } from './singlestore.component';

describe('SinglestoreComponent', () => {
  let component: SinglestoreComponent;
  let fixture: ComponentFixture<SinglestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
