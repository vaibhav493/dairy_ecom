import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofileIcon from '../Assets/nav-profile.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeV6hoEhT95sKpu_dGFqUTlRmoWQGSnNX2WGamRCNmQ&s" className='nav-logo' alt="" />
      <p>|||DairyEase</p>
      <Link to={"/login"}>
      <img  title='login !' src={"https://static.vecteezy.com/system/resources/previews/022/014/159/original/avatar-icon-profile-icon-member-login-isolated-vector.jpg"} className='nav-profile' alt="" />
      
      </Link>
    </div>
  )
}

export default Navbar
