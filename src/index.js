import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import contexts
import ModeContextProvider from 'contexts/ModeContxt';
import ModalContextProvider from 'contexts/ModalContext';
import FunctionsContextProvider from 'contexts/FunctionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModeContextProvider>
      <ModalContextProvider>
        <FunctionsContextProvider>
          <App />
        </FunctionsContextProvider>
      </ModalContextProvider>
    </ModeContextProvider> 
  </React.StrictMode>
);