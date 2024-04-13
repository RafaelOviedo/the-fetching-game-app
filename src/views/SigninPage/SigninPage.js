import style from './SigninPage.module.css';
import SigninForm from '../../components/Auth/SigninForm/SigninForm';

function SigninPage() {
  return (
    <div className={style.signinPagePageContainer}>
      <SigninForm />
    </div>
  )
}

export default SigninPage;