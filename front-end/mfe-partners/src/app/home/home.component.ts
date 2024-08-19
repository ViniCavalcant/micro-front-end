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
    this.partnersService.getPartners().subscribe(partners => this.partners = partners.slice(0, 10));
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
        this.selectedPartner = null;  // Clear the selected partner after deletion
      });
    }
  }

  // Adicione o método onEdit para lidar com a edição
  onEdit(partner: Partner): void {
    // Implemente a lógica de edição aqui
    console.log('Edit partner:', partner);
  }
}
