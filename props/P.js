import React from 'react'



//const P = ({name,value}) => {
const P = (props) => {
  return (
    <>

       {/* <h2>you can see  hear,  {name}  has {value} marks in maths.</h2> */}
        <h1>  {props.value1} </h1>
        <h2>  {props.name}   {props.value} </h2>

        {/* lern types of probs likes as proptypes.string
                                     propstypes.number                 */}

                          {/* P.defaultprops= {          
                            name:"name is not show"
                            value: "is not passed"
                          } */}

    </>
  )
}

export default P;