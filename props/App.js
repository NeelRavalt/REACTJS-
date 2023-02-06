import React from 'react';
import './App.css';
import P from './P';

function App() {
  return (
   <div>
   <P name= ""
      value1 ={"student marks"}/>
         <P  name= "Roy"
             value = {" has 80 marks."}
          />
         <P  name= "Joy"
             value = {"has 30 marks."}
          />
         <P  name= "Rusi"
             value = {"has 10 marks."}
          />


   </div> 
  )
}

export default App;
