import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import api from '../services/api/axios'

function PrintJoke() {

    const [jokeQuest, setJokeQuest] = useState('')
    const [jokeAnswer, setJokeAnswer] = useState('')

    const handleRandomJoke = async () => {
        const response = await api.get('/jokes/random')
        setJokeQuest(response.data[2])
        setJokeAnswer(response.data.answer)
        console.log(response.data)
        console.log(jokeQuest)
        console.log(jokeAnswer)
    }


  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen text-center align-middle'>
        <h1 className='pt-8 text-5xl font-bold text-carambar-500 bubble'>Envie de rire ? </h1>
        
            <NavLink onClick={handleRandomJoke} className="p-4 rounded-lg w-fit broder border-carambar-500">
                
                <button className='text-yellow-200 btn bg-carambar-500'>
                 Une blague
                 </button>
                 </NavLink>

    </div>
  )
}

export default PrintJoke