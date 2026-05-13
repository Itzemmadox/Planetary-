/**
 * main.jsx
 * Entry point for the React application.
 * Renders the root component into the DOM.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Initialize the root element and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
