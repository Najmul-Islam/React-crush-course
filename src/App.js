import React from 'react'
import ContactCard from './ContactCard'

function App(){
  return(
    <div className="contacts">
      <ContactCard
        contact={{
        name:"Mr. Whiskerson",
        imgUrl:"http://placekitten.com/300/200",
        phone:"123456",
        email:"whiskeroson@gmail.com"}}
      />

      <ContactCard
        contact={{
        name:"Fluffykins",
        imgUrl:"http://placekitten.com/400/200",
        phone:"123456",
        email:"fluffykins@gmail.com"
        }}
        
      />

      <ContactCard
      contact={{
        name:"Destroyer",
        imgUrl:"http://placekitten.com/400/300",
        phone:"123456",
        email:"Destroyer@gmail.com"
      }}
        
      />

      <ContactCard
      contact={{
        name:"Feli",
        imgUrl:"http://placekitten.com/300/200",
        phone:"123456",
        email:"Feli@gmail.com"
      }}
       
      />

    </div>  
  )
}

export default App