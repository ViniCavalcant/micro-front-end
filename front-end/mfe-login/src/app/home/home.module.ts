import { HeaderLoginComponent } from './../../../../main-app/projects/host/src/app/header-login/header-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, HeaderLoginComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}