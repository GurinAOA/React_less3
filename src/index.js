import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/App';
import { MyContextComponent } from './Context/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyContextComponent>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MyContextComponent>
);

