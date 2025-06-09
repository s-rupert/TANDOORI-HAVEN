// main.jsx or App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PageProvider } from './components/PageContext';
import './index.css';
import Test from './Test';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <App />
      {/* <Test /> */}
    </PageProvider>
  </React.StrictMode>
);
