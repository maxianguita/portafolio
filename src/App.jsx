
import './App.css'
import Header from './components/Header/Header'
import Home from './components/home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Services from './components/ServicesCard/Services'
import Qualification from './components/Qualification/Qualification'
import Testimonials from './components/Testimonials/Testimonials'

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
        <Testimonials/>
      </main>
    </div>
  )
}

export default App
