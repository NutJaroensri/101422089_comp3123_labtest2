# 101422089_comp3123_labtest2
# Nut Jaroensri
# Getting Started with Create React App

This is a Comp3123 Lab Test 2 Weather Conditions

## Features
- View a current weather conditions of the city searched


# Getting Started with Create React App

This is a Comp3123 Lab Test 2 Weather Conditions

## Features
- View a current weather conditions of the city searched


### API 
- `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
- replace key with OpenWeatherMap API key

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `App.js`
The App.js file is the main part of the app. It controls the city name, the weather data, and any error messages using React hooks

### `Search.js`
The Search.js file has the input box where users can type the name of a city. It gets the current city name

### `Weather.js`
The Weather.js file shows the weather information that was received. It gets the weather data and any error messages from App.js and display

# Screen output Toronto
![Image Alt](https://github.com/NutJaroensri/101422089_comp3123_labtest2/blob/ddde3466473d31d3702776406d4f0c8cd8c36c84/Toronto.PNG)
# Screen output Edmonton
![Image Alt](https://github.com/NutJaroensri/101422089_comp3123_labtest2/blob/fd32f631f435b2e9e546d5192f3ab896a68c7659/Edmonton.PNG)
# Screen output Not Found
![Image Alt](https://github.com/NutJaroensri/101422089_comp3123_labtest2/blob/fd32f631f435b2e9e546d5192f3ab896a68c7659/NotFound.PNG)

