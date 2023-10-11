import React from 'react'
import Main from './Main'
import About from './About'
import Clients from './Clients'
import Services from './Services'
import RecentBlog from './RecentBlogs'
import FAQs from './FAQs'

const Home = () => {
  return (
    <Main>
        <About/>
        <Clients/>
        <Services/>
        <FAQs/>
        <RecentBlog/>
    </Main>
  )
}

export default Home