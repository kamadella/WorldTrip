import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripVievComponent } from './trip-viev.component';

describe('TripVievComponent', () => {
  let component: TripVievComponent;
  let fixture: ComponentFixture<TripVievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripVievComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
