import React from 'react'
import Searchbar from './Searchbar'

function Error() {
  return (
    <div className='bg-gradient-to-b from-black via-blue-900 to-teal-800 h-screen flex flex-col items-center justify-start pt-20'>
        <h1 className='text-4xl text-white font-bold'>
            Please enter a valid city name
        </h1>
        <Searchbar />
        
    </div>
  )
}

export default Error