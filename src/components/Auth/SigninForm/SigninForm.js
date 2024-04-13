import { useState, useRef } from 'react';
import style from './SigninForm.module.css';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';

function SignupForm() {
  const toast = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSignupForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const createUser = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await axios.post('/auth', signupForm);

      setSignupForm({ email: '', password: '' });
      showSuccessToast();
    } 
    catch (error) {
      showFailureToast();
      throw new Error(error);
    } 
    finally {
      setIsLoading(false);
    }
  }

  const showSuccessToast = () => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Loged in successfully!', life: 5000 });
  };
  const showFailureToast = () => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: 'There was a problem loging into your account, please try again!', life: 5000 });
  };

  return (
    <form className={style.signinFormContainer}>
      <Toast ref={toast} position="top-center" />

      <div className={style.formSection}>
        <label
          htmlFor="email"
          className={style.label}
        >
          Email*
        </label>
        <input
          value={signupForm.email}
          className={style.inputBox}
          type="email"
          name="email"
          onChange={handleInputChange}
        />
      </div>

      <div className={style.formSection}>
        <label
          htmlFor="password"
          className={style.label}
        >
          Password*
        </label>
        <input
          value={signupForm.password}
          className={style.inputBox}
          type="password"
          name="password"
          onChange={handleInputChange}
        />
      </div>

      <div className={style.buttonsContainer}>
        {/* <p
          v-if="serverErrors"
          class="error-msg"
        >
          Alguno de los campos es incorrecto, por favor intente nuevamente
        </p> */}

        <button
          onClick={createUser}
          className={style.signinButton}
        >
          { isLoading ? <ProgressSpinner style={ { width: '35px', height: '35px' } } strokeWidth="4" /> : 'Sign In' }
        </button>
      
        <button
          className={style.haveAccount}
        >
          ¿Don't have an account? Sign Up!
        </button>
      </div>
    </form>
  )
}

export default SignupForm;