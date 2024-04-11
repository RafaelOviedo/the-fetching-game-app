import style from './NavBar.module.css'
import { Link } from "react-router-dom";
import 'primeicons/primeicons.css';

function NavBar() {

  return (
    <nav className={style.navContainer}>
      <div className={style.logoContainer}>
        <i className='pi pi-list' style={ { fontSize: '25px', color: '#fff', cursor: 'pointer' } }></i>
        {/* <i className='pi pi-times' style={ { fontSize: '25px', color: '#fff', cursor: 'pointer' } }></i> */}
        <span style={ { fontSize: '20px', fontWeight: 500, color: '#fff' } }>THE FETCHING GAME</span>
      </div>

      <div className={style.navBox}>
        <Link 
          to='/'
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

        <div className={style.linkItem}>
          <span>Profile</span>
          &nbsp;
          &nbsp;
          <i className='pi pi-user'></i>
        </div>

        <div className={style.linkItem}>
          <span>Logout</span>
          &nbsp;
          &nbsp;
          <i className='pi pi-sign-out'></i>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;