import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

window.global = window.globalThis;
window.require = require;

ReactDOM.render(<App />, document.getElementById('root'));
