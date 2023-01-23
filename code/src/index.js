/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable react/jsx-tag-spacing */


import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
