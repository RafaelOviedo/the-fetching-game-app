import style from './SignupPage.module.css';
import SignupForm from '../../components/Auth/SignupForm/SignupForm';

function SignupPage() {
  return (
    <div className={style.signupPagePageContainer}>
      <SignupForm />
    </div>
  )
}

export default SignupPage;