import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    // <nav className={s.nav_list}>
    <Nav variant="pills" className="mr-auto">
      <Nav.Link>
        <NavLink
          exact
          to="/"
          // className={[s['base'], s['link']].join(' ')}
          // activeClassName={s.active}
        >
          Home
        </NavLink>
      </Nav.Link>
      <Nav.Link>
        <NavLink
          to="/contacts"
          // className={[s['base'], s['link']].join(' ')}
          // activeClassName={s.active}
        >
          Contacts
        </NavLink>
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
