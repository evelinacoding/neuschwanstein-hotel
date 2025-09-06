import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHotelComponent } from './the-hotel.component';

describe('TheHotelComponent', () => {
  let component: TheHotelComponent;
  let fixture: ComponentFixture<TheHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
