import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UN: null,
      PW: null
    };
    this.handlePWChange = this.handlePWChange.bind(this)
    this.handleUNChange = this.handleUNChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }




  handleUNChange = (event) => {
    this.setState({UN: event.target.value})
  }

  handlePWChange = (event) => {
    this.setState({PW: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.UN && this.state.PW) {
      let formData = { UN: this.state.UN, PW: this.state.PW }
      this.props.handleLogin(formData)
    }else{ 
      null
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleUNChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handlePWChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
