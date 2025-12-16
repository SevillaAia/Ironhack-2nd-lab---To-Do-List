// import image from './assets/doItSvg.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import DoIt from './components/doit.jsx'
import Cards from './components/cards.jsx'
// Here import
function App() {

  return (
    <>
    <div className='body-container'>
     <Navbar />
        <Sidebar />
          <DoIt /> 
            <Cards /> 
              <Footer/>
    </div>
     
{/* Here, HTML with JS dynamically */}
    </>
  )
}

export default App

