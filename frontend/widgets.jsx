import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock';
import CalculatorWidet from './calculator'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div>
      <ClockWidget />
      <CalculatorWidet />
    </div>
    , root);
})
