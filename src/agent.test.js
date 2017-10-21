import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import agent from './agent';

it('screenshot api', () => {
  console.log(agent.screenshot.generateScreenshot());
});
