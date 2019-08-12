import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { Router } from '@angular/router';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {

    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [
        { provide: Router, useValue: spyRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
