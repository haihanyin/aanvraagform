import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuGroupComponent } from '../menu_group/menu-group.component';
import { PersoonlijkComponent } from '../content/persoonlijk/persoonlijk.component';
import { RelatiesComponent } from '../content/relaties/relaties.component';
import { AdresComponent } from '../content/adres/adres.component';
import { HuisartsComponent } from '../content/huisarts/huisarts.component';
import { VerzekeraarComponent } from '../content/verzekeraar/verzekeraar.component';
import { ZorgvraagComponent } from '../content/zorgvraag/zorgvraag.component';
import { ToestemmingComponent } from '../content/toestemming/toestemming.component';
import { IndienenComponent } from '../content/indienen/indienen.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    let spyRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [ 
        MenuComponent,
        MenuGroupComponent,
        PersoonlijkComponent,
        RelatiesComponent,
        AdresComponent,
        HuisartsComponent,
        VerzekeraarComponent,
        ZorgvraagComponent,
        ToestemmingComponent,
        IndienenComponent,
        HomeComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: { 'params': of([{'menu' : 'personlijk'}]) }},
        {provide: Router, useValue: spyRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
