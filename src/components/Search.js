import React, { useState } from 'react'

const Search = ({getLocation}) => {

    const [ city, setCity ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log({city})

        if(city === "" || !city) return

        getLocation(city)
    }

  return (

    <div className='container'>   
        <form onSubmit={onSubmit}>
            <div className='flex w-screen justify-center mb-3 mt-5 text-center'>
                <input 
                    type="text" 
                    placeholder='Search city' 
                    onChange={(e) => setCity(e.target.value)} 
                    className='self-center w-1/2 h-10 px-3.5 rounded-lg text-xl text-zinc-800 shadow-sm font-mono border-solid border-2 border-sky-700' 
                />
                <button type='submit' className='border border-indigo-500 bg-sky-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-sky-600 focus:outline-none focus:shadow-outline'>
                    Buscar
                </button>
            </div>
        </form>
    </div>

  )
}

export default Search

