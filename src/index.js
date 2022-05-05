import React from 'react';
import ReactDOM from 'react-dom';
import { AppEcommerce } from './AppEcommerce';
import { ThemeContextProvider } from './context/useThemeContext';

import './styles/styles.scss';

ReactDOM.render(
  <ThemeContextProvider>
    <AppEcommerce />
    </ThemeContextProvider>,
  document.getElementById('root')
);
