import { Component } from '@angular/core';
import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';
import { PartnersService } from '../../../../main-app/projects/host/src/app/services/partners.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  partners: Partner[] = [];

  constructor(
    private partnersService: PartnersService
  ){
    console.log('Arquivo sendo carregado');
    this.getPartners();
  }
  
  getPartners(): void{
    this.partnersService.getPartners().subscribe(
      (partners) => (this.partners = partners)
    );
  }
}
