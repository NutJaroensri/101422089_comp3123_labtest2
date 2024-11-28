import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Search from './Search';
import Weather from './Weather';


function App() {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const key = "ad56d606b835569d7f5200231496abee"

    
    useEffect(() => {
      const fetchWeather = async () => {
        try {
          
          const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
          );
          setWeatherData(response.data);
          setError(null); 
        } catch (err) {
          setError('Not found'); 
          setWeatherData(null);
        }
      };
  
      fetchWeather();
    }, [city]); 
  
  
    const handleCityChange = (event) => {
      setCity(event.target.value);
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Conditions</h1>
        <Search city={city} onCityChange={handleCityChange} />
      </header>
      <Weather weatherData={weatherData} forecastData={forecastData} error={error} />
    </div>
  );
}

export default App;
