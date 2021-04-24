import React from 'react'

function Jokes (props) {

    return(
        <div>
            <h3 style={{display: !props.question && 'none'}}>Question: {props.question}  </h3>
            <h4 style={{color: !props.question && "#8a8a8a"}}>Answer: {props.punchLine} </h4>
            <hr/>
        </div>
    )
}
export default Jokes