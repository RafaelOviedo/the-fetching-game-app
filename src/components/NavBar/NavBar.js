import style from './NavBar.module.css';
import { Link, useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar, closeSidebar } from '../../features/sidebar/sidebarSlice';
import { logout } from '../../features/auth/authSlice';

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.value);

  const signOut = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <nav className={style.navContainer}>
      <div className={style.logoContainer}>
        <i onClick={() => dispatch(openSidebar())} className='pi pi-list' style={ { fontSize: '25px', color: '#fff', cursor: 'pointer', display: isSidebarOpen ? 'none': 'block' } }></i>
        <i onClick={() => dispatch(closeSidebar())} className='pi pi-times' style={ { fontSize: '25px', color: '#fff', cursor: 'pointer', display: !isSidebarOpen ? 'none': 'block' } }></i>
        <span onClick={() => navigate('/home')} style={ { fontSize: '20px', fontWeight: 500, color: '#fff', cursor: 'pointer' } }>THE FETCHING GAME</span>
      </div>

      <div className={style.navBox}>
        <Link 
          to='/home'
          className={style.linkItem} 
        >
          Home
        </Link>

        <Link 
          to='/buy_a_level'
          className={style.linkItem}
        >
          Buy a Level
        </Link>

        <Link 
          to='/about'
          className={style.linkItem}
        >
          About
        </Link>

        <Link to='/profile' className={style.linkItem}>
          <span>Profile</span>
          &nbsp;
          &nbsp;
          <i className='pi pi-user'></i>
        </Link>

        <button onClick={signOut} className={style.logout}>
          <span>Logout</span>
          &nbsp;
          &nbsp;
          <i className='pi pi-sign-out'></i>
        </button>
      </div>
    </nav>
  )
}

export default NavBar;