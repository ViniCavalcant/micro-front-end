import { Component } from '@angular/core';
import { PartnersService } from './../../../../main-app/projects/host/src/app/services/partners.service';
import { Partner } from './../../../../main-app/projects/host/src/app/models/partner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  partners: Partner[] = [];
  isDeleteModalOpen = false;
  selectedPartner: Partner | null = null;

  constructor(private partnersService: PartnersService) {
    this.getPartners();
  }

  getPartners(): void {
    this.partnersService.getPartners().subscribe(partners => this.partners = partners.slice(0, 20));
  }

  openDeleteModal(partner: Partner): void {
    this.selectedPartner = partner;
    this.isDeleteModalOpen = true;
  }

  deleteItem(): void {
    if (this.selectedPartner) {
      this.partnersService.deletePartner(this.selectedPartner.id).subscribe(() => {
        this.getPartners();
        this.isDeleteModalOpen = false;
        this.selectedPartner = null;
      });
    }
  }

  onEdit(partner: Partner): void {
    console.log('Edit partner:', partner);
  }
}
