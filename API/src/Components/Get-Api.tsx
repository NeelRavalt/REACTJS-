import Axios from "axios";
import { useEffect, useState } from "react";
// import Data from "./Data";


const getdata = "https://jsonplaceholder.typicode.com/users";
export default function GetApi() {

    const [first, setfirst] = useState([{ id: 0, name: "", email: "", username: "" }]);

    useEffect(() => {
        Axios.get(getdata).then((response) => {
            setfirst(response.data);
        })
    }, []);

    return (

        // const { id, name, email, username } = item;   // store value in variable

        
            <table className="table container ">
                <thead>
                    <tr>
                        <th scope="col" >ID</th>
                        <th scope="col" >NAME</th>
                        <th scope="col" >EMAIL</th>
                        <th scope="col">USERNAME</th>
                    </tr>
                </thead>

                {/* <Data first={first}/> */}

                <tbody>
                    {first.map((item) => (                 //to get all data use map 
                        <tr>

                            <th scope="row">{item.id}</th>
                            <td  >{item.name}</td> 
                            <td >{item.email}</td>
                            <td >{item.username}</td>
                        </tr>)

                    )}
                </tbody>
            </table>
        



    )
}
