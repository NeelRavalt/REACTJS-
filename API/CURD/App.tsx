import Create from "./CURD/Create";
// import Edit from "./CURD/Edit";
import Read from "./CURD/Read"
import {  Routes, Route } from 'react-router-dom';

function App() {
  

  return (
   
    <div className='container'>

    <Routes>
  <Route path="/" element={<Read/>}></Route>
  <Route path="/create" element={<Create/>}></Route>
  {/* <Route path="/read" element={<Edit/>}></Route> */}

</Routes>
{/* 
          <Read/>
         <Create/> */}
    </div>
  )
}

export default App
