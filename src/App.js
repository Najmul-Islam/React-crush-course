import React from 'react'
import Jokes from './Jokes'

function App () {
    return(
        <div>
            <Jokes punchLine="Lorem Ipsum is simply dummy text of the printing and typesetting" />
            <Jokes 
                question=" Lorem Ipsum is simply dummy text of the printing and typesetting industry." 
                punchLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Jokes
                question=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                punchLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Jokes
                question=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                punchLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Jokes
                question=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                punchLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Jokes
                question=" Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                punchLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />


          
        </div>
    )
}

export default App