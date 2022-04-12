import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter /> {/* AppRouter entscheided welche Page angezeigt werden soll */}
  </React.StrictMode>,
  document.getElementById('root')
);