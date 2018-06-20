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
}

export default AlbumWidget;
