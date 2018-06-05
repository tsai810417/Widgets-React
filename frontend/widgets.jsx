import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<ClockWidget />, root);
})
