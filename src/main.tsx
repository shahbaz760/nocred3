import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster
      position='top-center'
      duration={4000}
      visibleToasts={3}
      richColors
    />
  </React.StrictMode>
);
