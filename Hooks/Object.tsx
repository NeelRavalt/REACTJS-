import React from 'react'
import { useState } from 'react'
export default function Object() {
 
 const obj = {
    name: "neel",
    age: 23,
    height: 6.10,
    isYoung: true
 }


 const number = [1,2,3,4,5]
 
 const [num, setnum] = useState(number)

 const [first, setfirst] = useState(obj)

const update = ()=>{    
    // setfirst({         //update this hole state and store new value..
    //     name: "ketan",
    //     age: 22,
    //     height: 5.10,
    //     isYoung: true
    // });
    setfirst( previousState =>{    //perticuler koi aek object update karvu hoy to actual state ne destructure karvu pade and thrn you can add new object..
        return{
            ...previousState,  //... spread operator..
        name: "Leo",
        age: 50,
        }
    });
}

//.................. for number 
const updatenum = ()=>{
    setnum(previousState =>{
       return [
            ...previousState,
       
            Math.floor(Math.random()*50)
      
        ]
    })

}

    return (
    <div>
        <h1>{first.name}</h1>
        <h1>{first.age}</h1>
        <h1>{first.height}</h1>
        <h1>{first.isYoung.toString()}</h1>

        <button onClick={update}>update object state</button>
       {/* <h2>{num.map((a,b)=> <span key={b}>{a}</span>)}</h2> */}
        <h2>{num.join(', ')}</h2> 
        <button onClick={updatenum}>update number</button>
    </div>
  )
}
