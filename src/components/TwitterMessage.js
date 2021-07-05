import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {charsRemaining:this.props.maxChars};
    this.handleCharChange = this.handleCharChange.bind(this);
  }


  handleCharChange = (event) => {
      let chars = event.target.value.length
      this.setState({charsRemaining: 280 - chars})

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleCharChange(event)} />
        <h5>{this.state.charsRemaining}</h5>
      </div>
    );
  }
}

export default TwitterMessage;
