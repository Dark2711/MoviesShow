import React from 'react'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="w-[310px] h-[460px] m-6 relative rounded-xl overflow-hidden border-none transition-all duration-300 ease-[cubic-bezier(0.175, 0.885, 0, 1)] shadow-md hover:scale-[(1.05, 1.05) hover:shadow-md hover:opacity-100" key={imdbID}>
      <div className='absolute p-4 w-full opacity-0 top-0 text-[#f9d3b4]'>
        <p>{Year}</p>
      </div>

      <div className='w-full h-full hover:h-full hover:opacity-30'>
        <img className='w-full h-full' src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div className='z-2 bg-[#343739] pt-4 px-6 pb-4 absolute bottom-0 right-0 left-0 hover:bg-transparent '>
        <span className='font-[raleway] uppercase text-sm tracking-wide font-[500] text-[#f9d3b4]'>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  )
}
 
export default MovieCard