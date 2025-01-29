import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';


function Searchbar() {
    const [city, setCity] = useState('')
    const navigate = useNavigate()
    
    const search = (city) => {
        if(city){
          navigate(`/weather/${city}`)
        }
    }
    
  return (
    <div className=' flex flex-col items-center justify-start'>
              <div className='relative mt-[60px] text-black'>
                <input
                  type='text'
                  placeholder='Enter the city name'
                  className='p-2 rounded-md w-[500px] ' 
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                      search(city)
                    }
                    
                  }}
                />
                <button className="absolute top-0 right-0 bottom-0 px-4 py-2 bg-teal-700 text-white rounded-r-md flex items-center justify-center"
                    onClick={() => search(city)} value={city} onChange={(e) => setCity(e.target.value)}
                  >
                <FaSearch/>
                </button>
               
              </div>
            </div>
  )
}

export default Searchbar