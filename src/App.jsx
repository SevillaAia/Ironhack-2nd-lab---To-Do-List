import image from './assets/doItSvg.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
import Sidebar from './components/sidebar.jsx'
import DoIt from './components/doit.jsx'
// Here import
function App() {

  return (
    <>
     <Navbar />
        <Sidebar />
          <DoIt />  
           <Footer/>
     
{/* Here, HTML with JS dynamically */}
    </>
  )
}

export default App

