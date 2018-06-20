import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock';
import CalculatorWidet from './calculator';
import Tabs from './tabs';
import PalindromWiget from './palindrom';
// import WeatherWigit from './weather';
import AutocompleteWidget from './autocomplete';
import AlbumWidget from './album';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const Names = ["Andy", "Brad", "Chris", "Dennis", "Elaine", "Sarah", "Xue"];
  ReactDOM.render(
    <div>
      <ClockWidget />
      <CalculatorWidet />
      <Tabs />
      <PalindromWiget />
      <AutocompleteWidget names={Names}/>
      <AlbumWidget />
    </div>
    , root);
})
