import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { LineasComponent } from '../app/components/lineas/lineas.component';
import { BarrasComponent } from '../app/components/barras/barras.component';
import { DonasComponent } from '../app/components/donas/donas.component';
import { RadarComponent } from '../app/components/radar/radar.component';
import { CircularComponent } from './components/circular/circular.component';
import { AreaPolarComponent } from './components/area-polar/area-polar.component';
import { DinamicaComponent } from './components/dinamica/dinamica.component';

const RUTAS:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'lineas', component: LineasComponent},
    {path: 'barras', component: BarrasComponent},
    {path: 'donas', component: DonasComponent},
    {path: 'radar', component: RadarComponent},
    {path: 'circular', component: CircularComponent},
    {path: 'areaPolar', component: AreaPolarComponent},
    {path: 'dinamica', component: DinamicaComponent},
    {path:'**', pathMatch:'full', redirectTo: 'home'}        
];

export const APP_ROUTES = RouterModule.forRoot( RUTAS);
