import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoonlijkComponent } from './persoonlijk.component';
import { FormsModule } from '@angular/forms';

describe('PersoonlijkComponent', () => {
  let component: PersoonlijkComponent;
  let fixture: ComponentFixture<PersoonlijkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoonlijkComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoonlijkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
