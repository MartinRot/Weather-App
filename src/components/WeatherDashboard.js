import React, { useState } from 'react'
import Card from './Card'
import Features from './Features'
import Search from './Search'

const WeatherDashboard = () => {

    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5'
    let cityUrl = "&q="
    
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&units=metric&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5'

    const [ weather, setWeather ] = useState([])
    const [ forecast, setForecast ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ show, setShow ] = useState(false)

    const getLocation = async(loc) => {
        setLoading(true)

        //weather
        urlWeather = urlWeather + cityUrl + loc    
        await fetch(urlWeather).then((response) => {
            if(!response.ok) throw {response}
            return response.json()
        }).then((weatherData) => {
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

        //Forecast
        urlForecast = urlForecast + cityUrl + loc
        await fetch(urlForecast).then((response) => {
            if(!response.ok) throw {response}
            return response.json()
        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false)
            setShow(true)

        }).catch(error => {
            console.log(error)
            setLoading(false)
            setShow(false)
        })

    }

  return (
    <div>
        <Search getLocation = {getLocation} />

        <Card 
            showData = {show}
            loadingData = {loading}        
            weather = {weather}
            forecast = {forecast}
        />

        <Features 
            getLocation = {getLocation}  
        />

    </div>
  )
}

export default WeatherDashboard