import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() partners: Partner[] = [];
  @Output() delete = new EventEmitter<string>();

  constructor() { }

  editPartner(id: string): void {
    console.log('Edit partner with id:', id);
  }

  deletePartner(id: string): void {
    this.delete.emit(id);
  }
}
