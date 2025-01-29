import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useNavigate } from 'react-router-dom';


function Weathercard() {
    useEffect(() => {
        document.title = 'city Weather'},[])
    const cityname = useParams()
    const navigate = useNavigate()
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        getUser()
    }, [cityname.city])
    let key = '4c1d2aca7c4142ba9ff120629252701';
    async function getUser() {
        try {
            const response = await axios.post(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityname.city}`);
            setLoading(false);
            console.log(response.data);
            setWeather(response.data.current);
            setError(false);
            
        } catch (error) {
            setLoading(false);
            setError(true);
            
        }
    }
    
    
    
  return (
  
    <div className="bg-gradient-to-b from-blue-950 via-blue-400 to-teal-500 h-screen flex flex-col items-center justify-start pt-20 text-white">
  {loading ? (
    <h1 className="text-3xl font-semibold animate-pulse">Loading...</h1>
  ) : error ? (
    navigate('/Error')
       
  ) : (
    <>
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl shadow-2xl p-10 space-y-4 w-4/5 max-w-lg mx-auto text-center border border-white border-opacity-30">
      <h1 className="text-5xl font-extrabold tracking-wide text-blue-100">
        Weather in <span>{cityname.city}</span>
      </h1>

      
      <h2 className="text-3xl font-semibold mt-2 flex items-center justify-center space-x-4">
        <img src={weather.condition.icon} alt="weather" className="w-12 h-12" />
        <span>{weather.condition.text}</span>
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">🌡 Temperature:</h2>
          <span className="text-2xl font-bold">{weather.temp_c}°C</span>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">💧 Humidity:</h2>
          <span className="text-2xl font-bold">{weather.humidity}%</span>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">🌬 Wind Speed:</h2>
          <span className="text-2xl font-bold">{weather.wind_kph} km/h</span>
        </div>
      </div>
    </div>
    <Searchbar/>
    
        </>
  )}

</div>


        
   
  )
}

export default Weathercard