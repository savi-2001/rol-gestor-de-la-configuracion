import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Noticia {
  titulo: string;
  descripcion: string;
  fecha: string;
}

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() limit: number = 0;

  noticias: Noticia[] = [
    { titulo: 'Nuevo laboratorio de robótica', descripcion: 'La CUJAE inaugura un moderno laboratorio.', fecha: '2025-10-20' },
    { titulo: 'Concurso nacional de software', descripcion: 'Estudiantes de Informática obtienen el primer lugar.', fecha: '2025-09-30' },
    { titulo: 'Fórum de Ciencia y Técnica', descripcion: 'Convocatoria abierta para el evento 2025.', fecha: '2025-08-25' },
    { titulo: 'Energías renovables', descripcion: 'Nuevos proyectos sostenibles en la universidad.', fecha: '2025-07-10' },
  ];

  get noticiasLimitadas(): Noticia[] {
    return this.limit > 0 ? this.noticias.slice(0, this.limit) : this.noticias;
  }
}