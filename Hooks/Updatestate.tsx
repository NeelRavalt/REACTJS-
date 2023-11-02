import React, { useState,useEffect} from 'react'
//un mount didmount ni jagiya ae use effact use kari sakay..
export default function Updatestate() {  // setstate updated value store kare.
                                         // state ae bydefault value store kare.
  const [state, setstate] = useState(0); //0 is by default value
  useEffect(() => {
   console.warn(state);   // state ni value show kare..
   
  }, [state==3])     // state = 3 thase tyare j update karse
                    // state ni value 3 thase toj output ma dekhase baki baground ma run thay
    
  return (

    <div>
        <h1>Updatestate {state}</h1>
      <button onClick={()=> {setstate (state+1)} }> Increment</button>
      <button onClick={()=> {setstate (state-1)} }>Decrement</button>
    </div>
  )
}
