import style from './SideBar.module.css'
// import { Link } from "react-router-dom";
import 'primeicons/primeicons.css';
import { useSelector } from 'react-redux'

function SideBar() {
  const isSidebarOpen = useSelector((state) => state.sidebar.value)

  return (
    <nav className={style.sidebarContainer} style={ isSidebarOpen ? { display: 'flex' } : { display: 'none'} }>
      sidebar
    </nav>
  )
}

export default SideBar;