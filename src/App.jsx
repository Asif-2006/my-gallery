import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)
  const [showbutton, setshowbutton] = useState(true)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(response.data)
  }


  useEffect(() => {
    getData()
  }, [index])





  let printUserData = "No user Available"
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className='h-screen bg-black text-white p-4 overflow-auto'>
      <div className="text-center my-8">
        <h1 className="pencerio  h-15 text-5xl pt-2 font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Welcome to My Gallery
        </h1>
      </div>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

      <div className="flex justify-center items-center p-4 font-semibold gap-7">
        {
          <button
            disabled={index === 1}
            className='w-[91.65px] h-11 cursor-pointer px-4 py-2.5 bg-purple-500 text-white m-3 rounded-[10px] active:scale-95 disabled:opacity-50
    disabled:cursor-not-allowed'
            onClick={() => {
              if (index > 1) {
                setUserData([])

                setindex(index - 1)
              }
            }}
          >
            Previous
          </button>
        }
        <h4>Page {index}</h4>
        <button
          className='w-[91.65px] h-11 cursor-pointer px-4 py-2.5 bg-purple-500 text-white m-3 rounded-[10px] active:scale-95'
          onClick={() => {
            setUserData([])
            setindex(index + 1)
          }}
        >
          Next
        </button>
      </div>


    </div>
  )
}

export default App