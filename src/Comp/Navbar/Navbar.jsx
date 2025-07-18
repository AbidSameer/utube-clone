import React from 'react'
import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import Logo from '../../assets/Logo.png'
import search_icon from "../../assets/search.png"
import upload_icon from "../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notificaion_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link } from 'react-router-dom'

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="Menu" />
        <Link to={'/'}><img className='logo' src={Logo} alt="Logo" /></Link>
      </div>

      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img className="search-icon" src={search_icon} alt="Search" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More" />
        <img src={notificaion_icon} alt="Notification" />
        <img className='user-icon' src={profile_icon} alt="User" />
      </div>
    </nav>
  )
}

export default Navbar
