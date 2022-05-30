import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {

    const [ data, setCity ] = useState({})
    const [ location, setLocation ] = useState('')    
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5`
    //const [ url, setUrl ] = useState(`https://api.openweathermap.org/data/2.5/forecast?q=corrientes&units=metric&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5`)

    useEffect(() => {

        try{
            axios.get(url).then((response) => {
                setCity(response.data)
                //console.log(response.data)
            })
        } catch(error){
            console.log(error.message)
        }
        
        //console.log("Temperatura en " + location + city)
        //console.log(city.city.list[0].main.temp)
        //console.log(city?.list[0])
  

    },[location])
    
    console.log(data)

    const handleClickCorrientes = () => {
        setLocation("Corrientes")
    }

    const handleClickJujuy = () => {
        setLocation("Jujuy")
    }

    const handleClickBsAs = () => {
        setLocation('Buenos Aires')
    }

    const handleClickMendoza = () => {
        setLocation("Mendoza")
    }



    if (!data) {
        return <div>Loading...</div>
    }
    
  return (
    <>
        <div>
            <button onClick={handleClickCorrientes}>corrientes</button><br /><br />
            <button onClick={handleClickJujuy}>jujuy</button><br /><br />
            <button onClick={handleClickBsAs}>bsas</button><br /><br />
            <button onClick={handleClickMendoza}>mendoza</button><br /><br />
        </div>

        <div>
            <p>Temperatura en {location} </p>
        </div> 

    </>
  )
}

export default List