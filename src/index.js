import React from 'react';
import ReactDOM from 'react-dom';
import './style/origin.css';
import Main from './layout/Main';
import {RegisterRem} from './utils/rem';
import * as serviceWorker from './serviceWorker';

RegisterRem();
document.title = "ChengFeiXiang's Blog"
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
