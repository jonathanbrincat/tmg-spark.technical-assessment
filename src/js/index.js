'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from '../react/App'


document.documentElement.classList.remove('no-js');

ReactDOM.render(
	<ReactApp />
, document.getElementById('app--react'));


if(module.hot) {
	module.hot.accept();
}
