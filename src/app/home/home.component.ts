import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menuIcon");
    if (menu && overlay && menuIcon) {
      menu.classList.toggle("active");
      overlay.classList.toggle("active");
      menuIcon.style.display = menu.classList.contains("active") ? "none" : "flex";
    }
  }
  closeMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuIcon = document.getElementById("menuIcon");
    if (menu && overlay && menuIcon) {
      menu.classList.remove("active");
      overlay.classList.remove("active");
      menuIcon.style.display = "flex";
    }
  }
}
