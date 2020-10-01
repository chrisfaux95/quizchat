import React from 'react';
import { Game } from './Game';
import './App.css';
import { SudokuProvider } from './context/SudokuContext';

/**
 * App is the root React component.
 */
const Sapp = () => {
  return (
    <SudokuProvider>
      <Game />
    </SudokuProvider>
  );
}

export default Sapp;