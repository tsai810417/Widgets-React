import React from 'react';
class CalculatorWidet extends React.Component{
  constructor(props){
    super(props)
    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { num: 0, str: '' };
  }

  componentDidMount(){
    this.setState({
      num: 0,
      str: ''
    })
  }

  calculate(e){
    this.props.str
  }

  handleClick(e){
    if (this.state.num == 0) {
      this.setState({
        num: e.target.innerHTML
      })
    } else {
      this.setState({
        num: this.state.num.toString() + e.target.innerHTML
      });
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.num}</h1>
        <button className='numbers' onClick={this.handleClick}>1</button>
        <button className='numbers' onClick={this.handleClick}>2</button>
        <button className='numbers' onClick={this.handleClick}>3</button>
        <button className='numbers' onClick={this.handleClick}>4</button>
        <button className='numbers' onClick={this.handleClick}>5</button>
        <button className='numbers' onClick={this.handleClick}>6</button>
        <button className='numbers' onClick={this.handleClick}>7</button>
        <button className='numbers' onClick={this.handleClick}>8</button>
        <button className='numbers' onClick={this.handleClick}>9</button>
        <button className='numbers' onClick={this.handleClick}>0</button>
        <button onClick={this.handleOp}>+</button>
        <button onClick={this.handleOp}>-</button>
        <button onClick={this.handleOp}>*</button>
        <button onClick={this.handleOp}>/</button>
        <button onClick={this.calculate}>=</button>

      </div>
    )
  }

}

export default CalculatorWidet;
