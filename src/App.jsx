import React, { useEffect, useState } from 'react'
import SearchIcon from './assets/search.svg'
import MovieCard from './components/MovieCard'

const API_URL = "http://www.omdbapi.com?apikey=7ca554c3";


const App = () => {
  const [search, setSearch] = useState("batman")
  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
    
    console.log(data.Search);
    setMovies(data.Search);
    
  };
  useEffect(() => {
    searchMovies(search)
  }, [])
  return (
      <div className='w-full h-full bg-gray-900'>
          <div className='flex flex-col justify-center items-center w-full'>
            <h1 className='text-orange-600 w-fit text-5xl mt-20 mb-8'>MovieShow</h1>
            <div className='w-full flex justify-center items-center'>
              <input type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-[60%] outline-none border-2 border-orange-500 shadow-lg py-2 rounded-l-3xl     bg-gray-500 px-6 relative'
              placeholder='Search for Movies'
              />
              <button className='bg-gray-500 h-11 w-12 rounded-r-3xl border-2 border-orange-500'
              ><img onClick={() => searchMovies(search)} src={SearchIcon} className='h-10 w-10 p-2' alt="Seacrh" /></button>
            </div>
            {movies?.length > 0 ? (
              <div className="w-full flex flex-wrap justify-center items-center mt-12">
                {movies.map((movie,index) => (
                  <MovieCard key={index} movie={movie} />
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center mt-12">
                <h2>No movies found</h2>
              </div>
            )}
          </div>
          
      </div>
  )
}

export default App