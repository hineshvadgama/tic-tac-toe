import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import WinnerModal from './components/WinnerModal/WinnerModal.js';

render(<WinnerModal />, document.getElementById('app'));
