import React from 'react'
import "./home.css"
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

const Home = () => {
  const newLocal = "home__img"
  return (
    <section className='home section' id='home'>
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />
                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
