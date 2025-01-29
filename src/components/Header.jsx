import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Header() {
  return (
    <header className='w-full sticky top-0 z-50'>
        <div className=' bg-blue-950 p-4  flex items-center justify-between '>
            <div className='text-blue-50 font-bold text-2xl  '>
                Weather Dashboard
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-xl text-blue-100'>
                <NavLink to="/" 
                className={({isActive}) => `'hover:text-blue-300' ${isActive? "text-blue-300": ''}` }
                >Home</NavLink>
                
                <NavLink 
                  onClick={(e) => {
                    e.preventDefault()
                    alert('Please enter city below')}} 
                  to="/weather"
                  className={({ isActive }) => `hover:text-blue-300 ${isActive ? "text-blue-300" : ""}`}>
                  Weather
              </NavLink>

            </div>
            
        </div>
    </header>
  )
}

export default Header