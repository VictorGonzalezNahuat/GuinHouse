import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  { 
    path: 'app', 
    loadComponent: () => import('./components/app/app').then(m => m.App),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { 
        path: 'home', 
        loadComponent: () => import('./components/app/components/home/home').then(m => m.Home) 
      },
      {
        path: 'inventario',
        loadComponent: () => import('./components/app/components/inventario/inventario').then(m => m.Inventario)
      },
      {
        path: 'clientes',
        loadComponent: () => import('./components/app/components/clientes/clientes').then(m => m.Clientes)
      },
      {
        path: 'compras',
        loadComponent: () => import('./components/app/components/compras/compras').then(m => m.Compras)
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./components/app/components/configuracion/configuracion').then(m => m.Configuracion)
      },
      {
        path: 'proveedores',
        loadComponent: () => import('./components/app/components/proveedores/proveedores').then(m => m.Proveedores)
      },
      {
        path: 'reportes',
        loadComponent: () => import('./components/app/components/reportes/reportes').then(m => m.Reportes)
      },
      {
        path: 'sucursales',
        loadComponent: () => import('./components/app/components/sucursales/sucursales').then(m => m.Sucursales)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./components/app/components/usuarios/usuarios').then(m => m.Usuarios)
      },
      {
        path: 'ventas',
        loadComponent: () => import('./components/app/components/ventas/ventas').then(m => m.Ventas)
      },
      {
        path: 'contabilidad',
        loadComponent: () => import('./components/app/components/contabilidad/contabilidad').then(m => m.Contabilidad)
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];