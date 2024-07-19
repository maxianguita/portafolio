
import './App.css'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/ServicesCard/Services'
import Qualification from './components/Qualification/Qualification'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollUp from './components/ScroolUp/ScrollUp'

const App = () => {
  return (
    <div>
      <Header />
      
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Work/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  )
}

export default App
