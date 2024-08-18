import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  login(userInput: HTMLInputElement, passwordInput: HTMLInputElement, keepConnectedInput: HTMLInputElement){
    const user = userInput.value;
    const password = passwordInput.value;
    const keepConnected = keepConnectedInput.checked;

    localStorage.setItem('user', user);
    localStorage.setItem('keepConnected', JSON.stringify(keepConnected));

    this.router.navigate(['/mfehomepage']);
  }
}