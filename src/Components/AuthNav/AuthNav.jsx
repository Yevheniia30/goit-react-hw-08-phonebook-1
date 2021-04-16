import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={s.nav_list}>
      <NavLink
        to="/login"
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Sign up
      </NavLink>
    </nav>
  );
};

export default AuthNav;
