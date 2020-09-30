import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.scss';

const Footer = () => (
  <footer>
    <span>
      Powered by
      <a className='icon' href='https://github.com/FakeMetalFan' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      &copy;<span>{new Date().getFullYear()}</span>
    </span>
  </footer>
);

export default Footer;
