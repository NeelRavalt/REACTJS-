import React from 'react'
import App from '../App';
import Actors01 from './Actors01';

function List01() {

    // const students = ["Nilay", "Raval", "Konfu King"];

    // const result = students.map (std => <h1>{std}</h1>);

    // const numbers = [2,3,5];

    // const results = numbers.map (num => <h1>{num = num*2}</h1>);

    const actors = [

        {
            id: 1,
            name: "Jethalal",
            age: 37
        },

        {
            id: 2,
            name: "Bhide",
            age: 38
        },

        {
            id: 3,
            name: "Popatlal",
            age: 47
        }
    ]

  return (
    <div className='App'>

    {/* map() not execute for empty element OR map() not change the array value */}

     {/* {students.map (std => <h1>{std}</h1>)}; */}

     {/* {result}; */}

     {/* {numbers.map (num => <h1>{num = num*2} </h1> )}; */}

     {/* {results}; */}

     {/* {actors.map(act => <Actors01 act= {act}/> )}; */}



        {/* solve key warning in clg using index, key={index}      0R   Key is not props */}

        {/* Key used to identify which item is updated, added ,changed   */}

     {/* {students.map ((std,index) => <h1 key={index}>{std}</h1>)}; */}

     {/* {actors.map((act) => <Actors01 key={act.id} act= {act}/> )}; */}
     
    </div>
  );
}

export default List01