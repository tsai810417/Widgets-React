import React from 'react';
class AutocompleteWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      names: [],
      input: ''
    })
  }

  render(){
    let i = 0;
    return (
      <div>
        <ul>
          { this.props.names.forEach( el => {
            return <li>{ el }</li>
          })}
        </ul>
      </div>
    )
  }
}

export default AutocompleteWidget;
