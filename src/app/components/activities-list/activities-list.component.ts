import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent {
  eventos = [
    { nombre: 'Semana de la Ingeniería', fecha: '2025-11-15' },
    { nombre: 'Conferencia sobre IA aplicada', fecha: '2025-12-02' },
  ];
}