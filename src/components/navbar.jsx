import image from "../assets/doItSvg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  return (
    <>
    <nav>
      <div></div>
      <img src={image} alt="notebook" className='note'></img>
      <FontAwesomeIcon icon={faBars} />
    </nav>
  
    </>
  )
}

export default Navbar
