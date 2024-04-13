import { useNavigate } from 'react-router-dom';
import style from './LandingPage.module.css';

function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className={style.landingPageContainer}>
      <button
        onClick={() => navigate('/sign_in')}
        className={style.haveAccount}
      >
        ¿Already have an account? Sign In!
      </button>
    </div>
  )
}

export default LandingPage;