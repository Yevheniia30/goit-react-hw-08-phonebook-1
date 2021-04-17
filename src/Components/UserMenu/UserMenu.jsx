import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import Avatar from '@material-ui/core/Avatar';
import { Button } from 'react-bootstrap';
// import avatarIcon from '../../images/person-square.svg';

const UserMenu = ({ name, onLogout }) => {
  // const split = name.split(',');
  // console.log(split);
  return (
    <div className={s.user_menu}>
      {/* <img src={avatar} alt="user's avatar" width="32"></img> */}
      {/* <Avatar>{name[0]}</Avatar> */}
      <Avatar src="/broken-image.jpg" />
      {/* <img src={avatarIcon} alt="avatar"></img> */}

      <p>Welcome, {name}</p>
      <Button type="button" variant="dark" onClick={onLogout}>
        Logout
      </Button>
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
