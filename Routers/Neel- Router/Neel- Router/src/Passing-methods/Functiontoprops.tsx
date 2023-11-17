import React from 'react'
interface Props {
    callmethod: () => void;
  }
export default function Functiontoprops(props : Props) {
  return (
    <div>
         <button onClick={ props.callmethod}>Click me</button> 
    </div>
  )
}
