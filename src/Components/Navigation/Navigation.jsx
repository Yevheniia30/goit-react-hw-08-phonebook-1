import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { Nav, Navbar } from 'react-bootstrap';
import PrivateRoute from '../PrivateRoute';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { connect } from 'react-redux';

const Navigation = ({ IsAuthenticated }) => {
  return (
    // <nav className={s.nav_list}>
    <Nav className=" mr-auto ">
      <Nav.Item>
        <NavLink
          exact
          to="/"
          // className={[s['base'], s['link']].join(' ')}
          // activeClassName={s.active}
        >
          Home
        </NavLink>
      </Nav.Item>
      {IsAuthenticated && (
        <Nav.Item>
          <NavLink
            to="/contacts"
            // className={[s['base'], s['link']].join(' ')}
            // activeClassName={s.active}
          >
            Contacts
          </NavLink>
        </Nav.Item>
      )}
    </Nav>
  );
};

const mapStateToProps = state => ({
  IsAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
