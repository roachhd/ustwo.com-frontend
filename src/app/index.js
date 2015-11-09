'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Env from './adaptors/server/env';
import App from './components/app';
import Flux from './flux';

window.env = Env;

React.initializeTouchEvents(true);

Flux.init().then(state => {
  ReactDOM.render(
    <App state={state} />,
    document.body
  );
});
