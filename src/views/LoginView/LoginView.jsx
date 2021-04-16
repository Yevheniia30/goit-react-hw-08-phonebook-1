import { Component } from 'react';
import s from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handlechange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form
        className={s.login_form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handlechange}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handlechange}
          ></input>
        </label>
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default LoginView;
