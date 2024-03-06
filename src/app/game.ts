import { Signal } from "@angular/core";

// Vecteur de N éléments de type T
type Vector<T, N extends number> = Array<T>;

type PLAYER = 'RED' | 'YELLOW';
type PLACE  = PLAYER | 'EMPTY';

type LINE   = Vector<PLACE, 7>;
export type BOARD  = Vector<LINE, 6>;

export type LineIndex      = 0 | 1 | 2 | 3 | 4 | 5;
export type ColumnIndex    = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const lines         : readonly LineIndex[] = [0, 1, 2, 3, 4, 5];
export const reverseLines  : readonly LineIndex[] = [5, 4, 3, 2, 1, 0];

export const columns         : readonly ColumnIndex[] = [0, 1, 2, 3, 4, 5, 6];
export const reverseColumns  : readonly ColumnIndex[] = [6, 5, 4, 3, 2, 1, 0];

export const emptyBoard: BOARD = Array.from({length: 6}, () => Array.from({length: 7}, () => 'EMPTY'));

export interface Game {
    readonly id: number;
    turn: PLAYER;
    readonly board: BOARD;
}

export interface GameServiceInterface {
    readonly sigGame: Signal<readonly Game[]>;
    newGame(): void;
    play(id: number, col: ColumnIndex): void;
}