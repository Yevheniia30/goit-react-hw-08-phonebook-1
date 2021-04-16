import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav_list}>
      <NavLink
        exact
        to="/"
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
