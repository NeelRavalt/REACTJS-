import React from 'react'


// pass or store the value in the state and give elseif condition for different result
export default function condition() {
  const [login, setLogin] = React.useState(0);
    return (
    <div>
                 {/*  {? :} ma if else use thay  */}
{
    login==1? <h1>welcome user 1</h1>   
    :login==2? <h1>welcome user 2</h1>
    : <h1> welcome user 3</h1>
}
    </div>
  )
}
