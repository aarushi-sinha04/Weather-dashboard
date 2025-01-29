import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar';
import Header from './Header';



function Home() {
  

  useEffect(() => {
    document.title = 'Weather - Home'
  })
  
  return (
    <>
    <Header />
    
    <div className='bg-gradient-to-b from-blue-950 via-blue-400 to-teal-500 h-screen flex flex-col items-center justify-start pt-20'>
      
      <h1 className='text-4xl text-white font-bold'>
        WELCOME TO WEATHER-SMART
      </h1>
      <h2 className='text-2xl text-white font-bold mt-4'>
        Lets get started
      </h2>

      <Searchbar />
    </div>
    </>
  );
}

export default Home;
