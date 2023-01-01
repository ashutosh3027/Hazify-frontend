import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import video1 from './../assets/video1.mp4'
function HeroSection() {
  const handleClickScroll = () => {
    const element = document.getElementById('sevices-section');
    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1 className='heading'>Hazify</h1>
      <p>Weather nowcasts and history in a fast and elegant way</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="#sevices-section"
          onClick={handleClickScroll}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
