import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorgvraagComponent } from './zorgvraag.component';

describe('ZorgvraagComponent', () => {
  let component: ZorgvraagComponent;
  let fixture: ComponentFixture<ZorgvraagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZorgvraagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZorgvraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
