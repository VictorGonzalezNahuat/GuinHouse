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
        loadComponent: () => import('./components/app/home/home').then(m => m.Home) 
      },
      {
        path: 'inventario',
        loadComponent: () => import('./components/app/inventario/inventario').then(m => m.Inventario)
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];