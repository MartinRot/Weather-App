import React from 'react'
import Loading from './Loading'

const Card = ( {loadingData, showData, weather, forecast }) => { 
    
    let today = new Date()
    let day = today.getDate()
    let month = today.getMonth() + 1
    let year = today.getFullYear()
    let date = day + '/' + month + '/' + year   
    
    let url = ""
    let iconUrl = ""

    /* Forecast data */
    let iconUrlD1 = ""
    let iconUrlD2 = ""
    let iconUrlD3 = ""
    let iconUrlD4 = ""
    let forecastDay1 = ""
    let forecastDay2 = ""
    let forecastDay3 = ""
    let forecastDay4 = ""

    if(showData){
        url = "http://openweathermap.org/img/w/"
        iconUrl = url + weather.weather[0].icon + ".png"

        iconUrlD1 = url + forecast.list[7].weather[0].icon + ".png"
        iconUrlD2 = url + forecast.list[15].weather[0].icon + ".png"
        iconUrlD3 = url + forecast.list[23].weather[0].icon + ".png"
        iconUrlD4 = url + forecast.list[31].weather[0].icon + ".png"

        forecastDay1 = forecast.list[7].dt_txt.substring(8, 10) + '/' + forecast.list[7].dt_txt.substring(5, 7) + '/' + forecast.list[7].dt_txt.substring(0, 4) + ' ' + forecast.list[7].dt_txt.substring(11, 13) + 'Hs.'
        forecastDay2 = forecast.list[15].dt_txt.substring(8, 10) + '/' + forecast.list[15].dt_txt.substring(5, 7) + '/' + forecast.list[15].dt_txt.substring(0, 4) + ' ' + forecast.list[15].dt_txt.substring(11, 13) + 'Hs.'
        forecastDay3 = forecast.list[23].dt_txt.substring(8, 10) + '/' + forecast.list[23].dt_txt.substring(5, 7) + '/' + forecast.list[23].dt_txt.substring(0, 4) + ' ' + forecast.list[23].dt_txt.substring(11, 13) + 'Hs.'
        forecastDay4 = forecast.list[31].dt_txt.substring(8, 10) + '/' + forecast.list[31].dt_txt.substring(5, 7) + '/' + forecast.list[31].dt_txt.substring(0, 4) + ' ' + forecast.list[31].dt_txt.substring(11, 13) + 'Hs.'
    }


  if (loadingData){
      return <Loading />
  }

  return (
    <div className='mt-2'>

        {
            showData === true ? (

                <div className="flex justify-center items-center p-2">
                  
                    <div className="grid gap-2 md:grid-cols-2 text-gray-100 shadow-md shadow-gray-600 w-full md:w-[40rem] max-w-[40rem] h-96 bg-gradient-to-br from-sky-900 to-sky-400 p-4 rounded relative">
                       
                        <div className='p-4 text-center'>
                            <p className="text-lg font-extrabold text-center">{weather.name}</p>
                            <p className="my-1 text-md">{date}</p>
                            <p className="text-md">{weather.main.temp.toFixed(1)}° C</p>
                            <p className='flex items-center capitalize'><img className='mr-4' src={iconUrl} alt="icon" />{weather.weather[0].description}</p>
                            <span className="text-lg font-extrabold absolute right-4 bottom-4">{forecast.city.country}</span>
                        </div>

                        <div className='p-4'>
                            <p>Temperatura Máxima { weather.main.temp_max.toFixed(1) }° C</p>
                            <p>Temperatura Mínima { weather.main.temp_min.toFixed(1) }° C</p>
                            <p>Sensasión Termica { weather.main.feels_like.toFixed(1) }° C</p>
                            <p>Humedad { weather.main.humidity }%</p>
                            <p>Viento { (weather.wind.speed*3.6).toFixed(2) } km/h</p>
                            
                            <hr className='mt-2 border-indigo-500'/>

                        </div>


                        <div className='flex flex-row items-center text-center w-[37rem] h-40'>
                        
                            <div className='w-1/4 '>
                                <p>{forecastDay1}</p>
                                <p className='flex items-center capitalize'><img className='' src={iconUrlD1} alt="icon" />{forecast.list[7].weather[0].description}</p>
                                <p>{forecast.list[7].main.temp.toFixed(1)}° C</p>
                            </div>

                            <div className='w-1/4 '>
                                <p>{forecastDay2}</p>
                                <p className='flex items-center capitalize'><img className='' src={iconUrlD2} alt="icon" />{forecast.list[15].weather[0].description}</p>
                                <p>{forecast.list[15].main.temp.toFixed(1)}° C</p>
                            </div>

                            <div className='w-1/4 '>
                                <p>{forecastDay3}</p>
                                <p className='flex items-center capitalize'><img className='' src={iconUrlD3} alt="icon" />{forecast.list[23].weather[0].description}</p>
                                <p>{forecast.list[23].main.temp.toFixed(1)}° C</p>
                            </div>
                            
                            <div className='w-1/4 '>
                                <p>{forecastDay4}</p>
                                <p className='flex items-center capitalize'><img className='' src={iconUrlD4} alt="icon" />{forecast.list[31].weather[0].description}</p>
                                <p>{forecast.list[31].main.temp.toFixed(1)}° C</p>
                            </div>                            
                                           
                        </div>  
                    </div>


                </div>
            ):(
                <p className='mb-96'></p>
            )
        }
        
    </div>
  )
}

export default Card
