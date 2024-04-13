import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SignupForm.module.css';
import axios from 'axios';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';

function SignupForm() {
  const navigate = useNavigate();
  const toast = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [signupForm, setSignupForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
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
      await axios.post('/users', signupForm);

      setSignupForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
      });

      showSuccessToast();
      navigate('/sign_in');
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
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Account created successfully!', life: 5000 });
  };
  const showFailureToast = () => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: 'There was a problem creating your account, please try again!', life: 5000 });
  };

  return (
    <form className={style.signupFormContainer}>
      <Toast ref={toast} position="top-center" />

      <div className={style.formSection}>
        <label
          htmlFor="first_name"
          className={style.label}
        >
          First Name*
        </label>
        <input
          value={signupForm.first_name}
          className={style.inputBox}
          type="text"
          name="first_name"
          onChange={handleInputChange}
        />
      </div>

      <div className={style.formSection}>
        <label
          htmlFor="last_name"
          className={style.label}
        >
          Last Name*
        </label>
        <input
          value={signupForm.last_name}
          className={style.inputBox}
          type="text"
          name="last_name"
          onChange={handleInputChange}
        />
      </div>

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

      <div className={style.formSection}>
        <label
          htmlFor="passwordConfirmation"
          className={style.label}
        >
          Password Confirmation*
        </label>
        <input
          value={signupForm.password_confirmation}
          className={style.inputBox}
          type="password"
          name="password_confirmation"
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
          { isLoading ? <ProgressSpinner style={ { width: '35px', height: '35px' } } strokeWidth="4" /> : 'Sign Up' }
        </button>
      
        <button
          onClick={() => navigate('/sign_in')}
          className={style.haveAccount}
        >
          ¿Already have an account? Sign In!
        </button>
      </div>
    </form>
  )
}

export default SignupForm;