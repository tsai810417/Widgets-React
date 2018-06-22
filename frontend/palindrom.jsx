import React from 'react';
class PalindromWiget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      str: '',
      result: ''
    });
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  palindrom(str) {
    let l = str.length;
    let i = 0;
    while (i < l / 2) {
      if (str[i] != str[l-i-1]) {
        return false;
      }
      i += 1;
    }
    return true;
  }

  handleSubmit(e) {
    const test = this.palindrom(this.state.str);
    if (test) {
      this.setState({
        result: 'This is a palindrom string'
      })
    } else {
      this.setState({
        result: 'This is NOT a palindrom string'
      })
    };
  }

  handleInput(e) {
    this.setState({
      str: e.currentTarget.value
    })
  }

  render(){
    return(
      <div>
        <h1>Palindrom Tester</h1>
        <input type='text' onChange={this.handleInput} value={this.state.str}></input>
        <button onClick={this.handleSubmit}>Check</button>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default PalindromWiget;
