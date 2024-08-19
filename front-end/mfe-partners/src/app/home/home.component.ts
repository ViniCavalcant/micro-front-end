import { Component, ViewChild } from '@angular/core';
import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';
import { PartnersService } from '../../../../main-app/projects/host/src/app/services/partners.service';
import { ModalComponent } from '../../../../main-app/projects/host/src/app/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  partners: Partner[] = [];

  constructor(private partnersService: PartnersService) {
    this.getPartners();
  }


  getPartners(): void {
    this.partnersService.getPartners().subscribe(partners => this.partners = partners.slice(0, 10));
  }
}
