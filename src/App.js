import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import SignupPage from './views/SignupPage/SignupPage';
import SigninPage from './views/SigninPage/SigninPage';
import LandingPage from './views/LandingPage/LandingPage';
import Home from './views/Home/Home';
import BuyNewLevel from './views/BuyNewLevel/BuyNewLevel';
import About from './views/About/About';
import UserProfile from './views/UserProfile/UserProfile';
import style from './App.module.css'

function App() {
  return (
    <div className={style.appContainer}>
      <NavBar />
      <div style={ { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
        <SideBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign_up' element={<SignupPage />} />
          <Route path='/sign_in' element={<SigninPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/buy_a_level' element={<BuyNewLevel />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
