import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApplicationPage from './Container/ApplicationPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ApplicationPage />, document.getElementById('root'));
registerServiceWorker();
