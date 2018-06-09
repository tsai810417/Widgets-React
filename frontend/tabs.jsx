import React from 'react';
class TabsWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      tabNum: 0,
      tabs: ["I am tab one", "I am tab two", "I am tab three"]
    });
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.state.tabNum = 0;
  }

  handleClick(e){
    this.setState({
      tabNum: e.target.value - 1
    })
  }

  render(){
    let tabNum = this.state.tabNum
    let message = this.state.tabs[tabNum];

    return(
      <div>
        <ul>
          <li value="1" onClick={this.handleClick}>One</li>
          <li value="2" onClick={this.handleClick}>Two</li>
          <li value="3" onClick={this.handleClick}>Three</li>
        </ul>
        <h1>
          { message }
        </h1>
      </div>
    )
  }
}

export default TabsWidget
