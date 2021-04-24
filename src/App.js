import React from 'react'
import Jokes from './Jokes'
import jokesData from './jokesData'

function App () {
   const jokeComponents = jokesData.map((joke) =>{
        return (
            <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
        )
    })
   
    return(
        <div>
           {jokeComponents}
        </div>
    )
}

export default App