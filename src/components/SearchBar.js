import React, { useRef } from 'react'

const SearchBar = () => {
    
    const searchRef = useRef()
    let location = ''

    function handleSearchClick(){
        location = searchRef.current.value
        console.log(location)
    }

    const searchLocation = (e) => {
        if(e.key === 'Enter') {
            handleSearchClick()
        }
    } 

  return (
    <>
        <div className='text-center'>Ninja Weather</div>

        <div className='relative'>
                <input  
                    type="text"
                    onKeyPress={searchLocation}
                    ref={searchRef}
                    className='w-full h-10 px-3.5 rounded-lg text-xl text-zinc-800 shadow-sm font-mono border-solid border-2 border-sky-700' 
                    />
        </div>
    </>
  )
}

export default SearchBar