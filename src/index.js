import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo(){
  const heading={
    color:'red',
    fontSize:'24',
    textAlign: 'center'
  }

  const pargraph = {
    textAlign: 'center',
    fontSize: '18'
  }

  const unorderList = {
    fontSize: '20'
  } 
  return(
    <div>
      <h1 style={heading}>Najmul Islam</h1>
      <p style={pargraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro alias aut nemo cumque ea voluptatem asperiores magnam tempora delectus exercitationem?</p>
      <ul style={unorderList}>
        <li>Shelet</li>
        <li>Kholna</li>
        <li>Rangamati</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));