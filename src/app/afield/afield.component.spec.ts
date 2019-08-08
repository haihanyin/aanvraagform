import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfieldComponent } from './afield.component';

describe('AfieldComponent', () => {
  let component: AfieldComponent;
  let fixture: ComponentFixture<AfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
