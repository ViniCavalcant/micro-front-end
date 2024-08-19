import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() partners: Partner[] = [];
  @Output() edit = new EventEmitter<Partner>();
  @Output() delete = new EventEmitter<Partner>();

  onEdit(partner: Partner): void {
    this.edit.emit(partner);
  }

  onDelete(partner: Partner): void {
    this.delete.emit(partner);
  }
}
