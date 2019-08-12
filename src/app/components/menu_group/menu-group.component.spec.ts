import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupComponent } from './menu-group.component';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';

describe('MenuGroupComponent', () => {
  let component: MenuGroupComponent;
  let fixture: ComponentFixture<MenuGroupComponent>;

  beforeEach(async(() => {
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ MenuGroupComponent, MenuComponent ],
      providers: [
        {provide: Router, useValue: spyRouter}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
