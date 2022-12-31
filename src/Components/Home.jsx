import React, { useState } from 'react'
import './../Style/home.css'
import geoAPIServices from '../services/geoAPIServices';
export default function Home() {
  const [location, setLocation] = useState("");
  const handleChange = (e)=>{
    setLocation(e.target.value);
  }
  const coordinatesByLocationName = ()=>{
     const {data} = geoAPIServices.getCoordinates(location, 5);
     console.log(data);
  }
  return (
    <div className="container">
      <div className="search-box">
        <input onChange={handleChange} value={location} type="text" placeholder="Search.." name="search" />
        <button type="submit" onClick={coordinatesByLocationName}>
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}
