import React from 'react';
class ConvertorWiget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      amountFrom: 0,
      amountTo: 0,
      curFrom: '',
      curTo: ''
    });
    this.update = this.update.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }
  }

  render(){
    return(
      <div>
        <form>
          <label>From:
            <input
              value={this.state.curFrom}
              onChange={this.update('curFrom')}>
            </input>
          </label>
          <label>To:
            <input
              value={this.state.curTo}
              onChange={this.update('curTo')}>
            </input>
          </label>
          <label>Amount:
            <input
              value={this.state.amountFrom}
              onChange={this.update('amountFrom')}>
            </input>
          </label>
          <input type='submit'>Check</input>
        </form>

      </div>
    )
  }
}

export default ConvertorWiget;
