import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

//Changes for ReactJS 18, also import createRoot above
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
