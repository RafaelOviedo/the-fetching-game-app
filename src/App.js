import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Home from './components/Home/Home';
import BuyNewLevel from './components/BuyNewLevel/BuyNewLevel';
import About from './components/About/About';
import style from './App.module.css'

function App() {
  return (
    <div className={style.appContainer}>
      <NavBar />
      <div style={ { width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/buy_a_level' element={<BuyNewLevel />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
