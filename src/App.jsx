import Logo from '/images/logo.png'
import AboutSection from './components/AboutSection'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

import './App.scss'

function App() {

  return (
    <>
      <header>
        <div className='logo'>
          <img src={Logo} alt='logo' title="logo"/>
        </div>
        <h1>Włoska kuchnia od 1996</h1>
        <p>Od ponad dwóch dekad serwujemy autentyczne włoskie smaki, przywołując aromatyczne tradycje prosto z serca Italii. Każde danie przygotowujemy z pasją i najwyższej jakości składników, aby nasi goście mogli poczuć prawdziwą magię włoskiej kuchni.</p>
        <div className='divider divider-l'/>
        <div className='divider'/>
      </header>
      <main>
        <AboutSection/>
        <Menu/>
        <Gallery/>
        <Contact/>
      </main>
      <footer>
          <ul>
            <li><a href='#' title='facebook'>Facebook <IoLogoFacebook/></a></li>
            <li><a href='#' title='instagram'>Instagram <FaInstagramSquare/></a></li>
            <li><a href='#' title='twitter'>X <BsTwitterX/></a></li>
          </ul>
          <ul>
            <li><b>tel: </b> +48 555 666 333</li>
            <li><b>mail: </b> restauracja@1996.com</li>
          </ul>
      </footer>
    </>
  )
}

export default App
