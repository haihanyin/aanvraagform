import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndienenComponent } from './indienen.component';

describe('IndienenComponent', () => {
  let component: IndienenComponent;
  let fixture: ComponentFixture<IndienenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndienenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndienenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
