import React from 'react';
import ReactDOM from 'react-dom/client'
import SoccerGame from './components/SoccerGame';

import './styles/main.css'; 


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SoccerGame />
  </React.StrictMode>,
)