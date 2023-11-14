import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trabajadores',
        loadChildren: () => import('../trabajadores/trabajadores.module').then(m => m.TrabajadoresPageModule)
      },
      {
        path: 'cotizaciones',
        loadChildren: () => import('../cotizaciones/cotizaciones.module').then(m => m.CotizacionesPageModule)
      },
      {
        path: 'proyectos',
        loadChildren: () => import('../proyectos/proyectos.module').then(m => m.ProyectosPageModule)
      },
      {
        path: 'productos', 
        loadChildren: () => import('../productos/productos.module').then(m => m.ProductosPageModule)
      },
      {
        path: 'avances', 
        loadChildren: () => import('../avances/avances.module').then(m => m.AvancesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/proyectos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/proyectos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
