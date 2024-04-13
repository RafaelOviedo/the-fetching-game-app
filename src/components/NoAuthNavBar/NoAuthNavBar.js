import style from './NoAuthNavBar.module.css';
import { Link, useNavigate } from "react-router-dom";
import 'primeicons/primeicons.css';

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={style.noAuthNavContainer}>
      <div className={style.logoContainer}>
        <span onClick={() => navigate('/')} style={ { fontSize: '20px', fontWeight: 500, color: '#fff', cursor: 'pointer' } }>THE FETCHING GAME</span>
      </div>

      <div className={style.navBox}>
        <Link 
          to='/about'
          className={style.linkItem}
        >
          About
        </Link>

        <div style={ { height: '50%', border: '1px solid #fff' } } />

        <div className={style.signingContainer}>
          <button onClick={() => navigate('/sign_up')} className={style.signUpButton}>
            <span>Sign Up</span>
          </button>

          <button onClick={() => navigate('/sign_in')} className={style.signInButton}>
            <span>Sign In</span>
            <i className='pi pi-sign-in'></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;