import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
  },
  {
    path: 'mfelogin',
    loadChildren: () =>
      import('mfelogin/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfehomepage',
    loadChildren: () =>
      import('mfehomepage/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfepartners',
    loadChildren: () =>
      import('mfepartners/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfeexternalcompanies',
    loadChildren: () =>
      import('mfeexternalcompanies/homeModule').then((module) => module.HomeModule),
  },
  {
    path: 'mfeabout',
    loadChildren: () =>
      import('mfeabout/homeModule').then((module) => module.HomeModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}