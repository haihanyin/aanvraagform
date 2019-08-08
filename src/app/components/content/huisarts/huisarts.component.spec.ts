import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuisartsComponent } from './huisarts.component';

describe('HuisartsComponent', () => {
  let component: HuisartsComponent;
  let fixture: ComponentFixture<HuisartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuisartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuisartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
