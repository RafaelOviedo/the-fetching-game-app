import style from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={style.homeContainer}>
      <Link 
        to={`/levels/${1}`}
        className={style.levelBox}
      >
        Level 1
      </Link>
      <Link 
        to={`/levels/${2}`}
        className={style.levelBox}
      >
        Level 2
      </Link>
      <Link 
        to={`/levels/${3}`}
        className={style.levelBox}
      >
        Level 3
      </Link>
    </div>
  )
}

export default Home;