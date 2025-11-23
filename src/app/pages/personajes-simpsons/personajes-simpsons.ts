import { Component, OnInit } from '@angular/core';
import { GestionSimpsons } from '../../services/gestion-simpsons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personajes-simpsons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes-simpsons.html',
  styleUrl: './personajes-simpsons.css',
})
export class PersonajesSimpsons implements OnInit {
  personajes: any[] = [];
  constructor(private gs: GestionSimpsons) {}

ngOnInit(): void {
    this.gs.getPersonajes().subscribe({
      next: (resp: any) => {
        console.log('Respuesta recibida:', resp);
        this.personajes = resp.results;
      },
      error: (err) => {
        console.error('Error al obtener los personajes:', err);
      }, 
      complete: () => {
        console.log('Petición completada');
      }
      
    })
  }
}
