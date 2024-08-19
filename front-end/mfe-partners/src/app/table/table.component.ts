import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() partners: Partner[] = [];

  onEdit(id: string): void {
  }

  onDelete(id: string): void {
  }
}
