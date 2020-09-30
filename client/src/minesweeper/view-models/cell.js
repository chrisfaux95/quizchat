import { immerable } from 'immer';

import { cellValue, cellState } from '../const';

export class Cell {
  [immerable] = true;

  constructor(
    value = cellValue.Empty,
    state = cellState.Hidden
  ) {
    this.value = value;
    this.state = state;
  }

  get isMined() {
    return this.value === cellValue.Mine;
  }

  get isBustedMine() {
    return this.value === cellValue.BustedMine;
  }

  get isIncorrectGuess() {
    return this.value === cellValue.IncorrectGuess;
  }

  get isEmpty() {
    return this.value === cellValue.Empty;
  }

  get isHidden() {
    return this.state === cellState.Hidden;
  }

  get isFlagged() {
    return this.state === cellState.Flagged;
  }

  get isMisplacedFlag() {
    return !this.isMined && this.isFlagged;
  }

  get isUnrevealedMine() {
    return this.isMined && !this.isFlagged;
  }
}
