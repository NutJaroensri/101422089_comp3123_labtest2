import React from 'react';

function Weather({ weatherData, error }) {
    return (
        <div className="weather-info">
      {weatherData ? (
        <div className="weather-content">
          <div className="left-side">
            <h2>{weatherData.name} ({weatherData.sys.country})</h2>
            <p>{weatherData.weather[0].description}</p>
            <p>{weatherData.main.temp}°C</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
            />
          </div>
          
          <div className="right-side">
            <p>Min Temperature: {weatherData.main.temp_min}°C</p>
            <p>Max Temperature: {weatherData.main.temp_max}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            <p>Visibility: {weatherData.visibility / 1000} km</p>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    );
  }
  
  export default Weather;