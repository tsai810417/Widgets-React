import React from 'react';
class AlbumWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      userInput: '',
      albums: []
    });
  }

  componentDidMount(){
    this.state.userInput = "";
  }
  render(){
    return(
      <div>
        <input
          type='text'
          onChange={this.handleInput}
          value={this.state.userInput}>
        </input>
      </div>
    )
  }
}

export default AlbumWidget;
