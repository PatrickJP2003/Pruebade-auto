import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { GamesService } from '../../services/games/games.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  games$: Observable<any[]> | undefined; // Observable de juegos

  constructor(private router: Router, private gamesService: GamesService) {}

  ngOnInit(): void {
    this.games$ = this.gamesService.getGames(); // Obtén los juegos desde Firebase
  }

  onClickProducto(game: any): void {
    this.router.navigate(['/producto', game.id]);
  }
}
