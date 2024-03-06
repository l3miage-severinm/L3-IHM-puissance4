import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { emptyBoard } from './game';
import { GameService } from './game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    constructor(public gameService: GameService) {
        for (let i = 0; i < 3; i++)
            gameService.newGame();
    }

    title = 'L3-IHM-puissance4';
}
