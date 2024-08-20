import { ExternalCompanies } from './../../../../main-app/projects/host/src/app/models/external-companies';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() externalCompanies: ExternalCompanies[] = [];
  @Output() edit = new EventEmitter<ExternalCompanies>();
  @Output() delete = new EventEmitter<ExternalCompanies>();

  onEdit(externalCompanie: ExternalCompanies): void {
    this.edit.emit(externalCompanie);
  }

  onDelete(externalCompanie: ExternalCompanies): void {
    this.delete.emit(externalCompanie);
  }
}
