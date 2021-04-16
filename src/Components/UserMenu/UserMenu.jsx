import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div>
      <p>Welcome</p>
      <NavLink
        to="/"
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Logout
      </NavLink>
    </div>
  );
};

export default UserMenu;
