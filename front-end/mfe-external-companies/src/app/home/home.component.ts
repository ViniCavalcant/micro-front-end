import { ExternalCompanies } from './../../../../main-app/projects/host/src/app/models/external-companies';
import { ExternalCompaniesService } from './../../../../main-app/projects/host/src/app/services/externalCompanies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  externalCompanies: ExternalCompanies[] = [];
  isDeleteModalOpen = false;
  selectedExternalCompanie: ExternalCompanies | null = null;

  constructor(private externalCompaniesService: ExternalCompaniesService) {
    this.getExternalCompanies();
  }

  getExternalCompanies(): void {
    this.externalCompaniesService.getExternalCompanies().subscribe(externalCompanies => this.externalCompanies = externalCompanies.slice(0, 10));
  }


  openDeleteModal(externalCompanie: ExternalCompanies): void {
    this.selectedExternalCompanie = externalCompanie;
    this.isDeleteModalOpen = true;
  }

  deleteItem(): void {
    if (this.selectedExternalCompanie) {
      this.externalCompaniesService.deleteExternalCompanies(this.selectedExternalCompanie.id).subscribe(() => {
        this.getExternalCompanies();
        this.isDeleteModalOpen = false;
        this.selectedExternalCompanie = null;
      });
    }
  }

  onEdit(externalCompanie: ExternalCompanies): void {
    console.log('Edit external companie:', externalCompanie);
  }
}
