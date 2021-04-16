import { Component } from 'react';
import s from './RegisterView.module.css';
import { connect } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handlechange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    // console.log(value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form
        className={s.register_form}
        onSubmit={this.handleSubmit}
        autoComplete="off"
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handlechange}
          ></input>
        </label>
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

// mapStateToProps = state => {};
// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(register(data)),
// });

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
