import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToestemmingComponent } from './toestemming.component';

describe('ToestemmingComponent', () => {
  let component: ToestemmingComponent;
  let fixture: ComponentFixture<ToestemmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToestemmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToestemmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
