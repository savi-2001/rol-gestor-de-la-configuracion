import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { EventsListComponent } from "./components/events-list/events-list.component";
import { HistoriaComponent } from './pages/historia/historia.component';
import { MisionVisionComponent } from './pages/mision/mision.component';
import { OrganizacionComponent } from './pages/organizacion/organizacion.component';

import { CarrerasComponent } from './pages/carreras/carreras.component';
import { PosgradosComponent } from './pages/posgrados/posgrados.component';
import { AdmisionesComponent } from './pages/admisiones/admisiones.component';

import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { PublicacionesComponent } from './pages/publicaciones/publicaciones.component';

import { ConveniosComponent } from './pages/convenios/convenios.component';
import { ColaboracionesComponent } from './pages/colaboraciones/colaboraciones.component';

import { NoticiasComponent } from './pages/noticias/noticias.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'noticias', component: NewsListComponent },
  { path: 'eventos', component: EventsListComponent },

   // Universidad
   { path: 'historia', component: HistoriaComponent },
   { path: 'mision', component: MisionVisionComponent },
   { path: 'organizacion', component: OrganizacionComponent },
 
   // Estudios
   { path: 'carreras', component: CarrerasComponent },
   { path: 'posgrados', component: PosgradosComponent },
   { path: 'admisiones', component: AdmisionesComponent },
 
   // Investigaciones
   { path: 'proyectos', component: ProyectosComponent },
   { path: 'publicaciones', component: PublicacionesComponent },
 
   // Relaciones Institucionales
   { path: 'convenios', component: ConveniosComponent },
   { path: 'colaboraciones', component: ColaboracionesComponent },
 
   // Noticias
   { path: 'noticias', component: NoticiasComponent },
 
   // Login
   { path: 'login', component: LoginComponent },
 
   // Página inexistente
   { path: '**', redirectTo: '' },
   { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
   { 
    path: 'mision-vision', 
    component: MisionVisionComponent 
  },
  
  

 
];

