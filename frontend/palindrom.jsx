import React from 'react';
class PalindromWiget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      str: '',
      result: ''
    });
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
  }
}

export default PalindromWiget;
