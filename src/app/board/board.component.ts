import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { BOARD, ColumnIndex, columns, lines } from '../game';
import { CommonModule } from '@angular/common';
import { GameService } from '../game.service';

// A) Composant Board
@Component({
  selector: 'l3m-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

    constructor() {}
    
    // QA.1)
    @Input({required: true}) data!: BOARD;

    // QA.2)
    private play: ColumnIndex = 0;
    @Output() playChange = new EventEmitter<ColumnIndex>();

    // QA.5)
    public selectedColumn = signal<undefined | ColumnIndex>(undefined);

    lines = lines;
    columns = columns;
}
