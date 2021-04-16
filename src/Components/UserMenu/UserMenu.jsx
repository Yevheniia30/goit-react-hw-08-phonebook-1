import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import Avatar from '@material-ui/core/Avatar';

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={s.user_menu}>
      {/* <img src={avatar} alt="user's avatar" width="32"></img> */}
      <Avatar>{name[0]}</Avatar>
      <p>Welcome, {name}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUsername(state),
});

// const mapDispatchToProps = dispatch => ({
//   onLogout: () => dispatch(logout()),
// });

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
