import React, { StrictMode }  from 'react';
import { render } from 'react-dom';

import Mine from './mapp';

import setupIcons from './setupIcons';

import './index.scss';

setupIcons();

function MineGame () {
  return (
  <StrictMode>
    <Mine />
  </StrictMode>
  );
  };

  export default MineGame;

