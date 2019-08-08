import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatiesComponent } from './relaties.component';

describe('RelatiesComponent', () => {
  let component: RelatiesComponent;
  let fixture: ComponentFixture<RelatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
