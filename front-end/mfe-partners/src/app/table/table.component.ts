import { Component, OnInit } from '@angular/core';

interface Partner {
  createdAt: string;
  name: string;
  description: string;
  repositoryGit: string;
  urlDoc: string;
  clients: any[];
  projects: any[];
  id: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  partners: Partner[] = [
    {
      createdAt: '2023-08-24T18:52:48.369Z',
      name: 'Parceiro 333',
      description: 'Para que serve essa parceria',
      repositoryGit: 'Link do repositório do git',
      urlDoc: 'awww.parceiro45.com',
      clients: [
        'Banco da Galera', 'Alegria Bankers', ',D)uUsW(4T', 67226, 612,
        73382, 13160, '|*:n[Ta;02', 'PMPzA91WyQ', '<fYM\\ssJxK'
      ],
      projects: [
        'Coban', 'Teddy360', '!RM&1Np{NM', 80739, '#1U?@I8{69', 36092,
        "K'Bn`9HOlu", 94077, 52122
      ],
      id: '93'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  editPartner(id: string): void {
    console.log('Edit partner with id:', id);
  }

  deletePartner(id: string): void {
    console.log('Delete partner with id:', id);
  }
}
