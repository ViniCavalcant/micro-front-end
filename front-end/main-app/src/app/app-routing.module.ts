import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'mfeLogin',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${process.env['MFE_LOGIN']}/remoteEntry.js`,
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule),
  },
  {
    path: 'mfeHomePage',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: `${process.env['MFE_HOMEPAGE']}/remoteEntry.js`,
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule),
  },
];