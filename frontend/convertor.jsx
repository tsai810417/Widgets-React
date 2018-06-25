import React from 'react';
class ConvertorWiget extends React.Component {
  constructor(props){
    super(props);
    this.state = ({
      amountFrom: '',
      amountTo: '',
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
            <input type='text'></input>
          </label>
          <label>To:
            <input type='text'></input>
          </label>
          <label>Amount:
            <input type='integer'></input>
          </label>
          <input type='submit'>Check</input>
        </form>

      </div>
    )
  }
}

export default ConvertorWiget;
