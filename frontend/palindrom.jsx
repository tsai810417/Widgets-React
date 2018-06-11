import React from 'react';
class PalindromWiget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      str: '',
      result: ''
    });
    this.handleInput = this.handleInput.bind(this);
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
  handleInput(e) {
    this.setState({
      str: e.currentTarget.value
    })
  }
  }
}

export default PalindromWiget;
