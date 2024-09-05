import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesRef: AngularFireList<any>; // Define la propiedad para la referencia de juegos

  constructor(private db: AngularFireDatabase) {
    this.gamesRef = this.db.list('games'); // Inicializa gamesRef en el constructor
  }

  // Método para agregar un juego
  addGame(game: any) {
    return this.gamesRef.push(game); // Agrega el juego a la base de datos
  }

  // Método para obtener la lista de juegos
  getGames(): Observable<any[]> {
    return this.gamesRef.valueChanges(); // Devuelve la lista de juegos
  }
}
