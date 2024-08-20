import { HeaderAplicationComponent } from './../../../../main-app/projects/host/src/app/header-aplication/header-aplication.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardColorComponent } from '../card-color/card-color.component';
import { CardTypographyComponent } from '../card-typography/card-typography.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    CardColorComponent,
    CardTypographyComponent,
    HeaderAplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
