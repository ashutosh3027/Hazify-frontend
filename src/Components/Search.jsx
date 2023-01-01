import React, { useState } from 'react'
import moment from 'moment'
import './../Style/search.css'
import geoAPIServices from '../services/geoAPIServices'

export default function Home() {
  const [location, setLocation] = useState('')
  const [weatherData, setWeatherData] = useState([])
  const [cityName, setCityName] = useState('')
  const [page, setPage] = useState(1)
  const [isRightActive, setIsRightActive] = useState(false)
  const [isLeftActive, setIsLeftActive] = useState(false)
  const handleChange = (e) => {
    setLocation(e.target.value)
  }
  const coordinatesByLocationName = async () => {
    setPage(1)
    const { data } = await geoAPIServices.getCoordinates(location, 10, 1)
    setCityName(location)
    setLocation('')
    setWeatherData(data.result)
    if (data.result.length === 10) {
      setIsRightActive(true)
    }
  }
  const formateDate = (date) => {
    const newDate = moment(date).format('DD/MM/YYYY, h:mm a')
    return newDate
  }
  const moveLeft = async () => {
    if (!isLeftActive) return
    if (page === 1 || page - 1 === 1) {
      setIsLeftActive(false)
    }
    const { data } = await geoAPIServices.getCoordinates(cityName, 10, page - 1)
    if (data.result.length > 0) {
      setIsRightActive(true)
      setPage(page - 1)
      setWeatherData(data.result)
    } else {
      setIsLeftActive(false)
    }
  }
  const moveRight = async () => {
    if (!isRightActive) return
    const { data } = await geoAPIServices.getCoordinates(cityName, 10, page + 1)
    console.log(data.result.length)
    if (data.result.length > 0) {
      setIsLeftActive(true)
      setPage(page + 1)
      setWeatherData(data.result)
    } else {
      console.log(isRightActive)
      setIsRightActive(false)
    }
    return
  }
  return (
    <div id="sevices-section">
      <h1>Enter city name</h1>
      <div className="search-box" >
        <input
          onChange={handleChange}
          value={location}
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button type="submit" onClick={coordinatesByLocationName}>
          <i class="fa fa-search"></i>
        </button>
      </div>
      {weatherData.length>0?<div className="container">
        <h1 className="city_name">{cityName}</h1>
        <div className="weatherData-container">
          <table>
            <tr className="tableHeading">
              <th>Time</th>
              <th>Temperature</th>
              <th>Weather</th>
              <th>Weather icon</th>
            </tr>
            {weatherData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{formateDate(val.local_time)}</td>
                  <td>{val.temprature}</td>
                  <td>{val.Weather.weather_description}</td>
                  <td>
                    <img
                      src={val.Weather.weatherIcon}
                      className="weatherImg"
                      alt="weatherImg"
                    ></img>
                  </td>
                </tr>
              )
            })}
          </table>
          <div className="page-slider">
            <span
              className={isLeftActive ? 'arrow left' : 'arrow left disable'}
              onClick={moveLeft}
            >
              <i class="fa fa-angle-left"></i>
            </span>
            <p className="page-number">{page}</p>
            <span
              className={isRightActive ? 'arrow right' : 'arrow right disable'}
              onClick={moveRight}
            >
              <i class="fa fa-angle-right"></i>
            </span>
          </div>
        </div>
      </div>:null}
      
    </div>
  )
}
