import React from 'react'

const Card = ({elem}) => {
  return (
    <div>
          <a href={elem.url} target='_blank'>
          <div
            
            className='h-40 w-44 my-1.5 bg-white ml-8 lg:ml-11 rounded-2xl overflow-auto'
          >
            <img
              className='h-full w-full object-cover '
              src={elem.download_url} alt="" />
          </div>
          <h2 className='text-center font-bold text-xl'>{elem.author}</h2>
        </a>
    </div>
  )
}

export default Card