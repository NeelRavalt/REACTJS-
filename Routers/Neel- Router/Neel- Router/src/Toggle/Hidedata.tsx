import React from 'react'
import  { useState } from 'react';
export default function Hidedata() {
    // by default false value set che means hide
    const [first, setfirst] = useState(false) 
  return (
    <div>
{        
// if state is true then show else hide
   first ?<h1>hello neel your state is working in true condition!! good job..</h1>: null
   
}
        <button onClick={() => setfirst(false)}>hide</button>
       <button onClick={() => setfirst(true)}>show</button>  <br /> 
       <button onClick={()=> setfirst(!first)}>Toggle</button>
    </div>
  )
}
