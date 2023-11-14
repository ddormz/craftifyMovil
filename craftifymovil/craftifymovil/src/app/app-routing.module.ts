import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'trabajadores',
    loadChildren: () => import('./trabajadores/trabajadores.module').then( m => m.TrabajadoresPageModule)
  },
  {
    path: 'cotizaciones',
    loadChildren: () => import('./cotizaciones/cotizaciones.module').then( m => m.CotizacionesPageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'avances',
    loadChildren: () => import('./avances/avances.module').then( m => m.AvancesPageModule)
  },
  {
    path: 'modaltrabajadores',
    loadChildren: () => import('./modales/modaltrabajadores/modaltrabajadores.module').then( m => m.ModaltrabajadoresPageModule)
  },
  {
    path: 'modalcotizaciones',
    loadChildren: () => import('./modales/modalcotizaciones/modalcotizaciones.module').then( m => m.ModalcotizacionesPageModule)
  },
  {
    path: 'modalproyectos',
    loadChildren: () => import('./modales/modalproyectos/modalproyectos.module').then( m => m.ModalproyectosPageModule)
  },
  {
    path: 'modalproductos',
    loadChildren: () => import('./modales/modalproductos/modalproductos.module').then( m => m.ModalproductosPageModule)
  },
  {
    path: 'modalavances',
    loadChildren: () => import('./modales/modalavances/modalavances.module').then( m => m.ModalavancesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
