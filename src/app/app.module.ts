import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Rutas
import { APP_ROUTES} from './app.routes';

//Graficos
import { ChartsModule } from 'ng2-charts';
import { LineasComponent } from './components/lineas/lineas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonasComponent } from './components/donas/donas.component';
import { RadarComponent } from './components/radar/radar.component';
import { HomeComponent } from './components/home/home.component';
import { CircularComponent } from './components/circular/circular.component';
import { AreaPolarComponent } from './components/area-polar/area-polar.component';
import { DinamicaComponent } from './components/dinamica/dinamica.component';

@NgModule({
  declarations: [
    AppComponent,
    LineasComponent,
    NavbarComponent,
    BarrasComponent,
    DonasComponent,
    RadarComponent,
    HomeComponent,
    CircularComponent,
    AreaPolarComponent,
    DinamicaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
