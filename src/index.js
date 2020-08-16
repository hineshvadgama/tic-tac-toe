import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/App.js';
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./favicon.ico');

render(<App />, document.getElementById('app'));
