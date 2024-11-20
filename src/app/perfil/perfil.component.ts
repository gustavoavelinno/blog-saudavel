import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  previewImage(event: any) {
    const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
    const reader = new FileReader(); // Instancia um FileReader

    // Quando o FileReader terminar de ler o arquivo, ele atualiza a imagem
    reader.onload = (e: any) => {
      const imgElement = document.getElementById('profile-img') as HTMLImageElement;
      imgElement.src = e.target.result; // Atualiza o src da imagem
    };

    if (file) {
      reader.readAsDataURL(file); // Lê o arquivo como URL
    }
  }
}

