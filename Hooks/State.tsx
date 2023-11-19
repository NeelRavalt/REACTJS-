import React from 'react'
import { useState } from 'react'

export default function State() {
  const [first, setfirst] = useState("neel")
   
  const update = ()=>{
    setfirst("nilay")
  }
  return (
    <div>
       <h1>{first}</h1>  
<button onClick={update}>Clickme</button>
    </div>
  )
}
