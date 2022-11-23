
import './App.css'
import Header from './components/Header/Header'
import Home from './components/home/Home'

const App = () => {
  return (
    <div>
      <Header />
      
      <main className='main'>
        <Home/>
      </main>
    </div>
  )
}

export default App
