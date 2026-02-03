import { Routes } from '@angular/router';
import { Formulario } from './pages/formulario/formulario';
import { ResgistroProducto } from './pages/resgistro-producto/resgistro-producto';
import { Listado } from './pages/listado/listado';
import { PersonajesSimpsons } from './pages/personajes-simpsons/personajes-simpsons';
import { Prueba } from './pages/prueba/prueba';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Formulario },
  { path: 'producto/registrar', component: ResgistroProducto },
  { path: 'producto/editar/:id', component: ResgistroProducto },
  { path: 'producto/listado', component: Listado },
  { path: 'simpsons/listado', component: PersonajesSimpsons },
  { path: 'prueba', component: Prueba }
];
