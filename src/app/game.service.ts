import { Injectable, signal } from '@angular/core';
import { ColumnIndex, Game, GameServiceInterface, emptyBoard, reverseLines } from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService implements GameServiceInterface {

    readonly sigGame = signal<Game[]>([]);

    constructor() {}

    newGame(): void {
        this.sigGame().push({
            id: this.sigGame().length, 
            turn: 'RED', 
            board: JSON.parse(JSON.stringify(emptyBoard))
        });
    }

    play(id: number, col: ColumnIndex): void {
        // Jeu en cours
        let g = this.sigGame()[id];
        
        for (let l of reverseLines)
            // Placement du jeton
            if (g.board[l][col] === 'EMPTY') {
                g.board[l][col] = g.turn;
                // Changement de joueur
                g.turn = g.turn === 'RED' ? 'YELLOW' : 'RED';
                return;
            }
    }
}
