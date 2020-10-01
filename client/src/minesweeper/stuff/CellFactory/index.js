import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const CellFactory = memo(({ state, cellRevealHandler, flagPlantingHandler, neighborsRevealHandler }) => {
  const { isHidden, isFlagged, isEmpty, isMined, isIncorrectGuess, isBustedMine, value } = state;

  if (isHidden) return (<button className='cell' onClick={cellRevealHandler} onContextMenu={flagPlantingHandler} />);

  if (isFlagged) return (<button className='cell' onContextMenu={flagPlantingHandler}>
    <FontAwesomeIcon icon={['far', 'flag']} />
  </button>);

  if (isEmpty) return (<button className='cell cell__visible' />);

  if (isMined || isIncorrectGuess || isBustedMine) return (<button
    className={`cell ${isIncorrectGuess ? 'cell__incorrect-guess' : isBustedMine ? 'cell__busted-mine' : ''}`}
  >
    <FontAwesomeIcon icon={['fas', 'bomb']} />
  </button>);

  return (<button className={`cell cell__visible cell__visible__${value}`} onMouseDown={neighborsRevealHandler}>
    {value}
  </button>);
});

export default CellFactory;
