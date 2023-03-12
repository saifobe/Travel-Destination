import React from 'react'
import './Header.css'
import Navbar from '../navbar/Navbar'

 function Header() {
  return (
    <div>
      <Navbar />
     <h1 className='welcome'>Welcome to my React page</h1>
    </div>
  )
}
export default Header;


