import React from 'react';
class ClockWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date()}
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    let intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(intervalId)
  }

  tick(){
    this.setState({
      time: new Date()
    })
  }

  render(){
    let arr = this.state.time.toString().split(' ');
    let day = arr[0];
    let date = arr.slice(1,3).join(' ');
    let time = arr[4];
    let zone = arr.slice(5,6).join(' ');

    return(
      <div id="clock-widget">
        <h1 className='title'>Clock</h1>
        <ul id="clock-info">
          <li>Date: <p>{ day }, { date }</p></li>
          <li>Time: <p>{ time }</p></li>
          <li>Zone: <p>{ zone }</p></li>
        </ul>
      </div>
    )
  }
}

export default ClockWidget
