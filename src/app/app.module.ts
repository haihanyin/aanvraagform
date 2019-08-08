import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuGroupComponent } from './menu_group/menu-group.component';
import { PersoonlijkComponent } from './content/persoonlijk/persoonlijk.component';
import { RelatiesComponent } from './content/relaties/relaties.component';
import { AdresComponent } from './content/adres/adres.component';
import { HuisartsComponent } from './content/huisarts/huisarts.component';
import { VerzekeraarComponent } from './content/verzekeraar/verzekeraar.component';
import { ZorgvraagComponent } from './content/zorgvraag/zorgvraag.component';
import { ToestemmingComponent } from './content/toestemming/toestemming.component';
import { IndienenComponent } from './content/indienen/indienen.component';
import { HomeComponent } from './home/home.component';
import { AfieldComponent } from './afield/afield.component';

@NgModule({
  declarations: [
    AppComponent,
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
    HomeComponent,
    AfieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
