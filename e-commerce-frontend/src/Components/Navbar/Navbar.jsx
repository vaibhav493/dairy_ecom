import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

  let [menu,setMenu] = useState("shop");
let totalCartitem =JSON.parse(localStorage.getItem("totalcartProduct"))
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='nav'>
      <Link to='/' onClick={()=>{setMenu("shop")}} style={{ textDecoration: 'none' }} className="nav-logo">
        <img style={{borderRadius:"5px"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQeV6hoEhT95sKpu_dGFqUTlRmoWQGSnNX2WGamRCNmQ&s"} alt="logo" />
        <p>||DairyEase</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Milk")}}><Link to='/mens' style={{ textDecoration: 'none' }}>Milk</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Pneer")}}><Link to='/womens' style={{ textDecoration: 'none' }}>Paneer</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Ghee")}}><Link to='/kids' style={{ textDecoration: 'none' }}>all products</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");}}>Logout</button>
        :<Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
        <Link to="/cart"><img src={cart_icon} alt="cart"/></Link>
        <div className="nav-cart-count">{}</div>
      </div>
    </div>
  )
}

export default Navbar
