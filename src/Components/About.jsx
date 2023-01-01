import React from 'react'
import aboutImg from './../assets/about.jpg'
import './About.css'
export default function About() {
  return (
    <div id="about-section">
        <h1>About</h1>
      <div className="e-card e-card-horizontal">
        <img src={aboutImg} alt="Sample" />
        <div className="e-card-stacked">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <h2 className="e-card-header-title">Hazify</h2>
            </div>
          </div>
          <div className="e-card-content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tenetur modi, veritatis numquam assumenda, temporibus dicta beatae nulla aperiam esse omnis vel dolores possimus molestiae eos ipsa excepturi rem sequi debitis vero blanditiis est quas minus! Placeat dolorem, nesciunt atque, veritatis culpa facere nobis tempore accusamus velit ea ducimus harum. Itaque rerum, nulla at molestias aperiam saepe corporis similique illo!
          </div>
        </div>
      </div>
    </div>
  )
}
