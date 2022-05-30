import React, { useEffect, useState } from 'react'

const Features = ( { getLocation }) => {

    const [ city, setCity ] = useState('Corrientes')
    
    useEffect(() => {
        getLocation(city)             
    },[city])  

    const handleBsAs = () => {          
        setCity('Buenos Aires')      
    }  
    const handleCorrientes = () => {          
        setCity('Corrientes')        
    }  
    const handleMendoza = () => {          
        setCity('Mendoza')          
    }  
    const handleUshuaia = () => {          
        setCity('Ushuaia')            
    }  
    const handleLima = () => {          
        setCity('Lima')             
    }  











  return (
      
    <div className="mt-4 flex items-center justify-center">

        <div className="grid grid-cols-12 px-18 gap-3">

            {/* Card 1*/}
            <div onClick={handleBsAs} className="cursor-pointer col-start-2 col-span-2 bg-rose-700 rounded-xl h-52 md:h-72">
                {/* Image */} 
                <img src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320" className="rounded-t-xl max-h-44" />

                {/* City Name */}
                <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Buenos Aires </p>

                {/* Distance */}
                <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> Temp. Actual 17° C </p>
            </div>

            {/* Card 2*/}
            <div onClick={handleCorrientes} className="cursor-pointer col-span-2 bg-red-500 rounded-xl h-52 md:h-72">
                {/* Image */}
                <img src="https://a0.muscache.com/im/pictures/db8167f7-5c57-4684-80ae-4350c73e45ef.jpg?im_w=320" className="rounded-t-xl max-h-44" />

                {/* City Name */}
                <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Corrientes </p>

                {/* Distance */}
                <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> Temp. Actual 17° C </p>
            </div>

            {/* Card 3*/}
            <div onClick={handleMendoza} className="cursor-pointer col-span-2 bg-pink-700 rounded-xl h-52 md:h-72">
                {/* Image */} 
                <img src="https://a0.muscache.com/im/pictures/ffde0c4b-1889-4d11-bb00-41411d34fdfc.jpg?im_w=320" className="rounded-t-xl max-h-44" />

                {/* City Name */} 
                <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Mendoza </p>

                {/* Distance */} 
                <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> Temp. Actual 17° C </p>
            </div>

            {/* Card 4 */}
            <div onClick={handleUshuaia} className="cursor-pointer col-span-2 bg-rose-600 rounded-xl h-52 md:h-72">
                {/* Image */}
                <img src="https://a0.muscache.com/im/pictures/03bb6d0a-5ccb-47e1-83fc-b7ad87e7f8c3.jpg?im_w=320" className="rounded-t-xl max-h-44" />

                {/* City Name */}
                <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Ushuaia </p>

                {/* Distance */}
                <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> Temp. Actual 17° C </p>
            </div>

            {/* Card 5 */}
            <div onClick={handleLima} className="cursor-pointer col-span-2 bg-rose-700 rounded-xl h-52 md:h-72">
                {/* Image */} 
                <img src="https://a0.muscache.com/im/pictures/a433b4d0-8183-4523-b4c5-99b81c5729c1.jpg?im_w=320" className="rounded-t-xl max-h-44" />

                {/* City Name */}
                <p className="text-xl md:text-3xl text-gray-50 pt-5 pl-3"> Lima </p>

                {/* Distance */}
                <p className="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10"> Temp. Actual 17° C </p>
            </div>


        </div> 

</div>





  )
}

export default Features