import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TableComponent } from '../table/table.component';
import { ModalComponent } from './../../../../main-app/projects/host/src/app/modal/modal.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent, 
    TableComponent, 
    ModalComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class HomeModule {
}
