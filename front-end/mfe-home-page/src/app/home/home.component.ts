import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: string | null = '';

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }

  ngAfterViewInit(): void {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
      item.addEventListener('click', (e: any) => {
        menuItems.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  }
}
