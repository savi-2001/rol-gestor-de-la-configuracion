import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './mision.component.html',
  styleUrls: ['./mision.component.css']
})
export class MisionVisionComponent implements OnInit {
  
  valoresFundamentales = [
    { icono: 'fa-graduation-cap', texto: 'Excelencia académica' },
    { icono: 'fa-flask', texto: 'Innovación tecnológica' },
    { icono: 'fa-handshake', texto: 'Compromiso social' },
    { icono: 'fa-balance-scale', texto: 'Ética profesional' },
    { icono: 'fa-leaf', texto: 'Sostenibilidad' },
    { icono: 'fa-users', texto: 'Trabajo interdisciplinario' }
  ];

  mision = {
    titulo: 'Misión',
    icono: 'fa-bullseye',
    contenido: [
      'La Universidad Tecnológica de La Habana "José Antonio Echeverría" (CUJAE) tiene como misión la formación integral de profesionales de excelencia, altamente competentes, éticos, innovadores y comprometidos con el desarrollo sostenible de la nación.',
      'Generamos, aplicamos y difundimos conocimientos científicos, tecnológicos y humanísticos de vanguardia, a través de la docencia de pregrado y posgrado, la investigación y la innovación, y la extensión universitaria.',
      'Contribuimos de manera decisiva a la solución de los problemas estratégicos del país, fomentando el vínculo Universidad-Sociedad-Industria y defendiendo los valores de la Revolución Cubana.'
    ]
  };

  vision = {
    titulo: 'Visión',
    icono: 'fa-eye',
    contenido: [
      'Ser la universidad líder en Cuba y un referente en Latinoamérica en la formación de ingenieros, arquitectos y científicos, reconocida por la calidad de sus egresados, la pertinencia y el impacto de su investigación, y su contribución activa a la transformación productiva y social.',
      'Aspiramos a ser una comunidad universitaria innovadora, digitalizada, interdisciplinaria y sostenible, que desde su compromiso con la justicia social y la independencia tecnológica, sea un pilar fundamental para el desarrollo próspero y soberano de Cuba.'
    ]
  };

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    this.animarTarjetas();
  }

  animarTarjetas(): void {
    setTimeout(() => {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card: any, index: number) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }, index * 200);
      });
    }, 100);
  }

  resaltarTexto(texto: string): string {
    const palabrasResaltar = [
      'formación integral de profesionales de excelencia',
      'Universidad-Sociedad-Industria',
      'innovadora, digitalizada, interdisciplinaria y sostenible'
    ];
    
    let textoResaltado = texto;
    
    palabrasResaltar.forEach(palabra => {
      const regex = new RegExp(palabra, 'gi');
      textoResaltado = textoResaltado.replace(
        regex, 
        `<span class="highlight">${palabra}</span>`
      );
    });
    
    return textoResaltado;
  }
}