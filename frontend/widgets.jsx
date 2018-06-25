import React from 'react';
import ReactDOM from 'react-dom';
import ClockWidget from './clock';
import CalculatorWidet from './calculator';
import Tabs from './tabs';
import PalindromWiget from './palindrom';
// import WeatherWigit from './weather';
import AutocompleteWidget from './autocomplete';
import AlbumWidget from './album';
import ConvertorWiget from './convertor';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const Names = ["Andy", "Brad", "Chris", "Dennis", "Elaine", "Sarah", "Xue"];
  const convertorAccess = 'cadccb3938255940e0e26d68adbc780d'
  ReactDOM.render(
    <div>
      <ClockWidget />
      <CalculatorWidet />
      <Tabs />
      <PalindromWiget />
      <AutocompleteWidget names={Names} />
      <AlbumWidget />
      <ConvertorWiget accessKey={convertorAccess} />
    </div>
    , root);
})
