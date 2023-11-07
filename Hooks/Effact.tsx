import React from 'react'
import { useState, useEffect } from 'react'

export default function Effact() {
  
  const [first, setfirst] = useState(0)
  
  const [name, setname] = useState("neel")
 

    useEffect(() => {
      console.log("this is first")
    }, [first])

    useEffect(() => {
      console.log("this is name")
    }, [name])
    
 
  
  return (
    <div><h1>{first}</h1>
        <button onClick={()=>setfirst(first+1)}>click me</button>
    <h1>{name}</h1>
        <button onClick={()=>setname("nilay")}>click me</button></div>
  )
}
 