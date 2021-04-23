import React from "react"

function App(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if(hours < 12){
    timeOfDay = "Morning"
    styles.color= "green"
  }else if(hours >= 12 && hours < 17){
    timeOfDay = "Afternoon"
    styles.color="red"
  }else{
    timeOfDay = "night"
    styles.color = "pink"
  }

  // const styles = {
  //   color: "red", 
  //   backgroundColor: "pink",
  //   fontSize: 24
  // }

  return(
    <div> 
    <h1 style={styles}>Good {timeOfDay}</h1>
    </div>
  )
}

export default App