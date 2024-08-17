// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent { }
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `<h1>Welcome to the Main Application</h1>`,
})
export class HomeComponent {}