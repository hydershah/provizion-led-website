import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SanityProvider } from './context/SanityContext';
import App from './App';
import './styles/index.css';
import './styles/themes.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <SanityProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SanityProvider>
    </HelmetProvider>
  </React.StrictMode>
);
