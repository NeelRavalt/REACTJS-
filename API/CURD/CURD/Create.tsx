import { useState } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function Create() {

    const [first, setfirst] = useState('');
    const [last, setlast] = useState('');
    const [email, setemail] = useState('');

    // we can navigate one page to another page use of this function
    const navigate = useNavigate();

    const getalldata = (e: any) => {
        e.preventDefault();     //submit data without reloading page
        axios.post('https://655b193eab37729791a88bbd.mockapi.io/NEEL-CURD', {   //this is personal mock api
            first,
            last,
            email
        })   //data store thai jase resolve thase reject ny thay resolve mate .then no use karvo 
            .then(() => {
                navigate('/');  //data insert thase to root page pr navigate thai jase so we can see new data
            })
    }
    return (
        <>
            <div className="mt-4 row container "><br />
                <div className="  col-md-6  d-flex justify-content-center">
                    <h1 className="bg-primary text-center text-white">Create data</h1>

                    <form action="post" className="container" onSubmit={getalldata}>
                        <div className="formgroup mb-2 d-flex justify-content-center">
                            <label htmlFor="Enter First" className="mx-3">Enter First</label>
                            <input type="text" onChange={(e) => setfirst(e.target.value)} value={first} placeholder=" Enter First Name" className="formgroup"required />
                        </div>
                        <div className="formgroup mb-2 d-flex justify-content-center">
                            <label htmlFor="Enter Last" className="mx-3" >  Enter Last</label>
                            <input type="text" onChange={(e) => setlast(e.target.value)} value={last} placeholder="Enter Last Name" className="formgroup" required/>
                        </div>
                        <div className="formgroup mb-2 d-flex justify-content-center">
                            <label htmlFor="Enter email" className="mx-3">Enter email</label>
                            <input type="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Enter @ social media" className="formgroup" required />
                        </div>
                        <div className="  button row container d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
                {/* check state value updation */}
                {first} <br /> 
                    {last} <br />
                    {email} <br />

            </div>
        </>
    )
}
