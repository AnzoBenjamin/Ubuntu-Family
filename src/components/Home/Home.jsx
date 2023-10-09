import React from 'react'
import Main from './Main'
import About from './About'
import Clients from './Clients'
import Services from './Services'

const Home = () => {
  return (
    <Main>
        <About/>
        <Clients/>
        <Services/>
    </Main>
  )
}

export default Home