import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tienePermisoCotizaciones = false;
  tienePermisosProductos = false;
  tienePermisosProyectos = false;
  tienePermisosTrabajadores = false;
  tienePermisosAvances = false;
  tienePermisosTareas = false;

  constructor() {

            
    const userData = JSON.parse(localStorage.getItem('usuarioLogueado')!);
    const tienePermisoCotizaciones = userData.user_info.permisos.includes('core.view_cotizaciones');
    const tienePermisosProductos = userData.user_info.permisos.includes('core.view_productos');
    const tienePermisosProyectos = userData.user_info.permisos.includes('core.view_proyecto');
    const tienePermisosTrabajadores = userData.user_info.permisos.includes('core.view_user');
    const tienePermisosAvances = userData.user_info.permisos.includes('core.view_avances');
    const tienePermisosTareas = userData.user_info.permisos.includes('core.view_tareas');

    this.tienePermisoCotizaciones = tienePermisoCotizaciones;
    this.tienePermisosProductos = tienePermisosProductos;
    this.tienePermisosProyectos = tienePermisosProyectos;
    this.tienePermisosTrabajadores = tienePermisosTrabajadores;
    this.tienePermisosAvances = tienePermisosAvances;
    this.tienePermisosTareas = tienePermisosTareas;

    console.log(this.tienePermisoCotizaciones, this.tienePermisosProductos, this.tienePermisosProyectos, this.tienePermisosTrabajadores, this.tienePermisosAvances, this.tienePermisosTareas);

  }

}
