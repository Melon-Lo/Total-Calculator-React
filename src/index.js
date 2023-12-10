import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import contexts
import ModalContextProvider from 'contexts/ModalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </React.StrictMode>
);