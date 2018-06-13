import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock';
import CalculatorWidet from './calculator';
import Tabs from './tabs';
import PalindromWiget from './palindrom';
import WeatherWigit from './weather';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(
    <div>
      <ClockWidget />
      <CalculatorWidet />
      <Tabs />
      <PalindromWiget />
      <WeatherWigit />
    </div>
    , root);
})
