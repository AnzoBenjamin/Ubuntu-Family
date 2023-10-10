import React from 'react'
import Main from './Main'
import About from './About'
import Clients from './Clients'
import Services from './Services'
import Blog from './Blog'

const Home = () => {
  return (
    <Main>
        <About/>
        <Clients/>
        <Services/>
        <Blog/>
    </Main>
  )
}

export default Home