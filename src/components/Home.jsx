import React from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
import LatestArticles from './LatestArticles'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='h-full w-screen'>
       <Hero/>
       <About/>
       <LatestArticles/>
       <Footer/>
    </div>
  )
}

export default Home