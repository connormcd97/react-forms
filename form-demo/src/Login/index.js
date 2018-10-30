import React, {Component} from 'react';


class Login extends Component {
  constructor(){
    super();
    // super calls the Component class's constructor,
    // which allows us to use 'this'

    this.state = {
      username: '',
      password: ''
    }
  }
  handleInput = (e) => {
    // console.log(e.currentTarget.name, ' < --e.currentTarget.name', e.currentTarget.value, ' < --e.currentTarget.value');
    // arrow functions automatically bind this, which means we can use this
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });

    // // this is short hand for doing
    // const state = this.state;
    // state[e.currentTarget.name] = e.currentTarget.value;
    // const obj = {
    //   name: 'jim'
    // }

    // obj['name']
    // obj.name
    // this.setState(state)
  }
  handleSubmit = (e) => {
    // To stop the page from refreshing
    // We don't want to refresh cuz were making a SPA, (single page application)
    e.preventDefault();

    // this is the messanger function from the app component
    // that will allow us to LIFT UP STATE to the parent component
    this.props.handleLogin(this.state.username, true);
  }
  render(){
    console.log(this.props, ' props in Login Component')
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder="username"/>
        <input type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder="password"/>
        <input type='submit' value="Login"/>
      </form>
      )
  }
}

export default Login;
