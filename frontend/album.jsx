import React from 'react';
class AlbumWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      userInput: '',
      albums: []
    });
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.state.userInput = "";
  }

  handleInput(e){
    this.setState({
      userInput: e.currentTarget.value
    })

    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${this.state.userInput}&api_key=9b0cdcf446cc96dea3e747787ad23575&format=json`).then(result => {
      console.log(result);
    })
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
