import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzekeraarComponent } from './verzekeraar.component';

describe('VerzekeraarComponent', () => {
  let component: VerzekeraarComponent;
  let fixture: ComponentFixture<VerzekeraarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerzekeraarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzekeraarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
