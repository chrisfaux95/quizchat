import React, { StrictMode }  from 'react';
import { render } from 'react-dom';

import { App } from 'App';

import { setupIcons } from 'setupIcons';

import './index.scss';

setupIcons();

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
