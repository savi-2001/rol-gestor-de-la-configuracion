import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from '../../components/news-list/news-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EventsListComponent } from "../../components/events-list/events-list.component";

@Component({
  selector: 'app-home',
  standalone: true, // 👈 ¡esto es clave!
  imports: [CommonModule, NewsListComponent, MatToolbarModule, EventsListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  navigateTo(section: string): void {
    console.log(`Navegando a la sección: ${section}`);
    // Aquí puedes agregar lógica para mostrar contenido dinámico o redirigir
  }
  images = [
    'assets/images/DSC03830.jpg',
    'assets/images/DSC03831.jpg',
    'assets/images/DSC03841.jpg',
  ];
  currentIndex = 0;

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

