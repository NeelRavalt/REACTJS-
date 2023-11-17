import React from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import  Home  from "./Routers/Home";
import  About  from "./Routers/About";
import Navbar from "./Routers/Navbar";
import Contact from "./Routers/Contact";
import { url } from "inspector";
import Pagenotfound from "./Routers/Pagenotfound";
import Products from "./Routers/Products";
import Shirts from "./Routers/Shirts";
import Jeans from "./Routers/Jeans";

function App() {
      const navigation = useNavigate();  //this is use for navigate page onclick button, comes from react router dom  

      //Navigating to multiple pages with single event.
      const Navigator = (url: any) => {  //this url accept any kind of path form route
            navigation(url);}
    const navi = ()=>{      //condition navigation 
      let name = 'neel';
      if (name== 'nilay')
      {
            navigation('/about');
      }
else{
      navigation('/contact');
}    
}

      return (
            <div className="card flex justify-content-center ">
            <Navbar/>
                  <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                       
                       {/* nested root means with child route */}
                        <Route path="/products" element={<Products />}>
   {/* index root auto render thai jase jyare  products run thase te hamesha parent ni niche use thay means child type use kari sako */}
                              <Route index element={<Shirts/>}></Route>
                              <Route path="Shirts" element={<Shirts/>}>ro</Route>
                              <Route path="Jeans" element={<Jeans/>}></Route>
                        </Route>
                       
                        <Route path="*" element={<Pagenotfound/>}></Route>
                  
                  </Routes>

                 
                  {/* <button onClick={() => Navigator('contact')}>click for go Contact us</button>
                  <button onClick={() => Navigator('/about')}>click for go about us</button>
                   */}
                  <button onClick={ navi}>click for go Contact us</button>
                  
                  <button onClick={()=>Navigator(-1) }>Go Back</button>
                  
            </div>
      )
}
export default App;
