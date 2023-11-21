import  { useState } from "react";
import Axios from "axios";
export default function Form() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
  
    const userinput=(e:any)=>{
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/users",
    {
        name,      //we can use dierctly state name as api data name
        email,       //we store in object
        username
    })
    .then((response)=>{
   console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
    }

    return (
        <div className=" container">
            <form onSubmit={userinput}>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleInputText" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Username</label>
                    <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} className="form-control" id="exampleInputText" aria-describedby="UsernameHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

