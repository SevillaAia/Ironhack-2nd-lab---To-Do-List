import image from '../assets/doItSvg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

function Footer() {

  return (
    <>
    <footer className='footer'>
      <p>Click the image below to go to our website</p>
      <a href="https://github.com/SevillaAia/Ironhack-2nd-lab---To-Do-List" target='_blank'><img src={image} alt='logo' className='note'/></a>
    </footer>
      <section>
{/* Here, HTML with JS dynamically */}
      </section>
    </>
  )
}

export default Footer

