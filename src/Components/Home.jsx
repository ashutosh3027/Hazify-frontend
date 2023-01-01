import React from 'react'
import Search from './Search'
import HeroSection from './HeroSection'
import Footer from './Footer'
import About from './About'
export default function Home() {
  return (
    <div>
     <HeroSection></HeroSection>
     <Search ></Search>
     <About></About>
     <Footer></Footer>
    </div>
  )
}
