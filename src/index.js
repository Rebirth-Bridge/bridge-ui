import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as bs from '../src/vendor/bootstrap/css/bootstrap.min.css';
import * as style from '../src/vendor/css/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
