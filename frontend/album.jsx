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
    if (e.currentTarget.value.length > 0) {
      fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${e.currentTarget.value}&api_key=9b0cdcf446cc96dea3e747787ad23575&format=json`).then(data => data.json()).then(data => {
        this.setState({
          albums: data.results.albummatches.album
        })
      })
    }
    this.setState({
      userInput: e.currentTarget.value
    })
  }

  render(){
    const albumsIndex = this.state.albums.map((el, idx) => {
      return(
        <tr key={idx}>
          <td>{el.name}</td>
          <td>{el.artist}</td>
        </tr>
      )
    });
    return(
      <div>
        <input
          type='text'
          onChange={this.handleInput}
          value={this.state.userInput}>
        </input>

        <table>
          <tbody>
            <tr>
              <td>Album Name</td>
              <td>Artist</td>
            </tr>
            {albumsIndex}
            </tbody>
        </table>
      </div>
    )
  }


}

export default AlbumWidget;
