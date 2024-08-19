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
  @ViewChild(ModalComponent) modal!: ModalComponent;
  private actionId: string | null = null;
  partners: Partner[] = [];

  constructor(private partnersService: PartnersService) {
    this.getPartners();
  }

  openEditModal(id: string): void {
    this.actionId = id;
    this.modal.title = 'Editar Parceiro';
    this.modal.message = 'Você pode editar as informações deste parceiro.';
    this.modal.confirmButtonText = 'Salvar';
    this.modal.isVisible = true;

    this.modal.confirm.subscribe(() => this.editPartner(this.actionId!));
    this.modal.cancel.subscribe(() => console.log('Edit canceled'));
  }

  openDeleteModal(id: string): void {
    this.actionId = id;
    this.modal.title = 'Excluir Parceiro';
    this.modal.message = 'Tem certeza que deseja excluir este parceiro?';
    this.modal.confirmButtonText = 'Excluir';
    this.modal.isVisible = true;

    this.modal.confirm.subscribe(() => this.deletePartner(this.actionId!));
    this.modal.cancel.subscribe(() => console.log('Delete canceled'));
  }

  getPartners(): void {
    this.partnersService.getPartners().subscribe(
      (partners) => (this.partners = partners.slice(0, 10))
    );
  }

  editPartner(id: string): void {
    if (id) {
    }
  }

  deletePartner(id: string): void {
    if (id) {
      this.partnersService.deletePartner(id).subscribe(() => {
        this.partners = this.partners.filter(partner => partner.id !== id);
      });
    }
  }
}
