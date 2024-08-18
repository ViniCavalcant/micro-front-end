// import { Component, Input, OnInit } from '@angular/core';
// import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';

// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.scss']
// })
// export class TableComponent {
//   @Input() partners: Partner[] = [];


//   constructor() { }

//   ngOnInit(): void {
//     console.log('Partners data:', this.partners);
//   }

//   editPartner(id: string): void {
//     console.log('Edit partner with id:', id);
//     // Adicione lógica de edição aqui
//   }

//   deletePartner(id: string): void {
//     console.log('Delete partner with id:', id);
//     // Adicione lógica de exclusão aqui
//   }
// }
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from '../../../../main-app/projects/host/src/app/models/partner';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @Input() partners: Partner[] = [];
  dataSource = new MatTableDataSource<Partner>(this.partners);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  editPartner(id: string): void {
    console.log('Edit partner with id:', id);
    // Adicione lógica de edição aqui
  }

  deletePartner(id: string): void {
    console.log('Delete partner with id:', id);
    // Adicione lógica de exclusão aqui
  }
}
