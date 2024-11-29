import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    
    if (menu && overlay) {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
    }
  }
}
