import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
// import UserMenu from '../UserMenu';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
      {/* {isAuthentificated ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};

export default AppBar;
