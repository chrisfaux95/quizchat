import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDidUpdate, useInterval } from '../../hooks';

import { formatCount } from '../../utils/count-formatter';

import './style.scss';

const Indicators = ({ minesCount, smileyFaceClickHandler, shouldStartCountingSeconds, isBust, isVictory }) => {
  const [secondsCount, setSecondsCount] = useState(0);
  const [intervalDelay, setIntervalDelay] = useState(null);

  useDidUpdate(() => {
    shouldStartCountingSeconds && setIntervalDelay(1e3);
  }, shouldStartCountingSeconds);

  useDidUpdate(() => {
    (isBust || isVictory) && setIntervalDelay(null);
  }, isBust, isVictory);

  useInterval(() => {
    setSecondsCount(count => count + 1);
  }, intervalDelay);

  return (
    <div className='indicators'>
      <div className='mines-count'>{formatCount(minesCount)}</div>
      <div className='smiley-face' onClick={() => {
        setIntervalDelay(null);
        setSecondsCount(0);
        smileyFaceClickHandler();
      }}>
        <FontAwesomeIcon icon={['far', isVictory ? 'smile' : isBust ? 'frown' : 'meh']} />
      </div>
      <div className='timer'>{formatCount(secondsCount)}</div>
    </div>
  );
};

export default Indicators;