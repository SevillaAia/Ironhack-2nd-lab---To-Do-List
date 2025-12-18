import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
     <section className='side-bar'>
      <Link to="/about"><h3>About Us</h3></Link> 
      <Link to="/"><h3>Home</h3></Link>
    </section>
    </>
  )
}

export default Sidebar