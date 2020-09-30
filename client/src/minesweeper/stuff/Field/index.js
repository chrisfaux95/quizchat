import React from 'react';

import CellFactory from '../CellFactory';

import './style.scss';

export const Field = ({ width, disabled, state, cellRevealHandler, flagPlantingHandler, neighborsRevealHandler }) => {
  const handleFlagPlanting = (event, cell, address) => {
    event.preventDefault();

    flagPlantingHandler(cell, address);
  };

  const handleNeighborsReveal = ({ target, nativeEvent }, address) => {
    const { which } = nativeEvent;

    const handleMouseup = event => {
      which !== event.which && neighborsRevealHandler(address);

      target.removeEventListener('mouseup', handleMouseup);
    };

    target.addEventListener('mouseup', handleMouseup);
  };

  return (
    <div
      className={`field${disabled ? ' disabled' : ''}`}
      style={{gridTemplateColumns: `repeat(${width}, 1fr)`}}
      onContextMenu={event => {event.preventDefault();}}
    >
      {state.map((cell, address) => <CellFactory
        key={address}
        state={cell}
        cellRevealHandler={() => {cellRevealHandler(cell, address);}}
        flagPlantingHandler={event => {handleFlagPlanting(event, cell, address);}}
        neighborsRevealHandler={event => {handleNeighborsReveal(event, address);}}
      />)}
    </div>
  );
};
