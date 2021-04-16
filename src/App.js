import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Loader from 'react-loader-spinner';
import s from './App.module.css';
// import Form from './Components/Form';
// import ContactsList from './Components/ContactsList';
// import Filter from './Components/Filter';
import AppBar from './Components/AppBar';
// import { getContact } from './redux/phoneBook/phoneBook-operations';
// import { getLoading, getError } from './redux/phoneBook/phoneBook-selectors';
import { Switch, Route } from 'react-router-dom';
import PhoneBookView from './views/PhoneBookView/PhoneBookView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import { getCurrentUser } from './redux/auth/auth-operations';

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }

  render() {
    return (
      <div className={s.App}>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/contacts" component={PhoneBookView} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// class App extends Component {
//   componentDidMount() {
//     this.props.getContact();
//   }
//   render() {
//     const { loading, error } = this.props;
//     return (
//       <div className={s.App}>
//         <h1>Phonebook</h1>
//         <Form />
//         <h2>Contacts</h2>
//         <Filter />
//         {loading && (
//           <Loader
//             type="ThreeDots"
//             color="#424141"
//             height={60}
//             width={60}
//             timeout={3000}
//           />
//         )}
//         {error && <p>Oops! Something went wrong...</p>}
//         <ContactsList />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   loading: getLoading(state),
//   error: getError(state),
// });

// const mapDispatchToProps = dispatch => ({
//   getContact: () => dispatch(getContact()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
