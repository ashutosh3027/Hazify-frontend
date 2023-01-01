import React, { useState } from 'react'
import moment from "moment"
import './../Style/home.css'
import geoAPIServices from '../services/geoAPIServices';
export default function Home() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [cityName, setCityName]= useState("");
  const handleChange = (e)=>{
    setLocation(e.target.value);
  }
  const coordinatesByLocationName = async ()=>{
     const {data} = await geoAPIServices.getCoordinates(location);
     setCityName(location);
     setLocation("")
     setWeatherData(data.result);
  }
  const formateDate = (date)=>{
    const newDate = moment(date).format("DD/MM/YYYY, h:mm a")
    return newDate
  }
  return (
    <div className="container">
      <div className="search-box">
        <input onChange={handleChange} value={location} type="text" placeholder="Search.." name="search" />
        <button type="submit" onClick={coordinatesByLocationName}>
          <i class="fa fa-search"></i>
        </button>
      </div>
       <h1 className='city_name'>{cityName}</h1>
      <div className="weatherData-container">
        <table>
          <tr className='tableHeading'>
          <th>Time</th>
          <th>Temperature</th>
          <th>Weather</th>
          <th>Weather icon</th>
          </tr>
          {weatherData.map((val, key)=>{
            return (
              <tr key={key}>
              <td>{formateDate(val.local_time)}</td>
              <td>{val.temprature}</td>
              <td>{val.Weather.weather_description}</td>
              <td><img src={val.Weather.weatherIcon} className="weatherImg" alt='weatherImg'></img></td>
            </tr>
            )
          })

          }
        </table>
        <div className="page-slider">
             <span className="arrow left"><i class="fa fa-angle-left"></i></span>
             <p className="page-number">1</p>
             <span className="arrow right"><i class="fa fa-angle-right"></i></span>
        </div>
      </div>
    </div>
  )
}
