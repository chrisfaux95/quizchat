import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const Header = () => (
  <header>
    <span className='title'>Minesweeper</span>

    <a className='icon' href='https://github.com/FakeMetalFan/minesweeper' target='_blank' rel='noopener noreferrer'>
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
  </header>
);

export default Header;
