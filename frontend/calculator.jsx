import React from 'react';
class CalculatorWidet extends React.Component{
  constructor(props){
    super(props)
    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { num: 0, str: '' };
  }
}

export default CalculatorWidet;
