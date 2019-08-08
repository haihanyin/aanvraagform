import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuGroupComponent } from './components/menu_group/menu-group.component';
import { PersoonlijkComponent } from './components/content/persoonlijk/persoonlijk.component';
import { RelatiesComponent } from './components/content/relaties/relaties.component';
import { AdresComponent } from './components/content/adres/adres.component';
import { HuisartsComponent } from './components/content/huisarts/huisarts.component';
import { VerzekeraarComponent } from './components/content/verzekeraar/verzekeraar.component';
import { ZorgvraagComponent } from './components/content/zorgvraag/zorgvraag.component';
import { ToestemmingComponent } from './components/content/toestemming/toestemming.component';
import { IndienenComponent } from './components/content/indienen/indienen.component';
import { HomeComponent } from './components/home/home.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
