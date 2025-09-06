import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGetHereComponent } from './how-to-get-here.component';

describe('HowToGetHereComponent', () => {
  let component: HowToGetHereComponent;
  let fixture: ComponentFixture<HowToGetHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToGetHereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowToGetHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
