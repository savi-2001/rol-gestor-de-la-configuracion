import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  eventos = [
    { nombre: 'Semana de la Ingeniería', fecha: '2025-11-15' },
    { nombre: 'Conferencia sobre IA aplicada', fecha: '2025-12-02' },
  ];
}