
import Axios from "axios";
import { useEffect, useState } from "react";
const getdata = 'https://655b193eab37729791a88bbd.mockapi.io/NEEL-CURD';
import { Link } from 'react-router-dom';

export default function Read() {
    const [firsts, setfirsts] = useState([{ id: 0, first: "", last: "", email: "" }]);
    useEffect(() => {
        Axios.get(getdata).then((response) => {
            setfirsts(response.data);
        })
    }, []);

    //for delete data
    const deletedata = ( id:number) =>{  //for delete use `back tics api` and pass /${id}
       
        Axios.delete(`https://655b193eab37729791a88bbd.mockapi.io/NEEL-CURD/${id}`)
            //api resolve thai jase so we can use .then 
            .then(() => {
                getdata
                alert(' your data was deleted please reload the page.');
            })
    }
    const editdata = ( id:number,first:any, last:any, email:any ) =>{  //for delete use `back tics api` and pass /${id}
       //we have to store value in to the local storage because we have to edit
       //give key value
       localStorage.setItem('id',id);    // inspect -> application-> localstorage
       localStorage.setItem('first',first);
       localStorage.setItem('last',last);
       localStorage.setItem('email',email);
       
    //    Axios.delete(`https://655b193eab37729791a88bbd.mockapi.io/NEEL-CURD/${id}`)
    //         //api resolve thai jase so we can use .then 
    //         .then(() => {
    //             getdata
                
    //         })
    }
    return (
        <>
            <div className=" mt-3 mb-3  button container  justify-content-center">
                <Link to="/create">
                    <button className=" btn btn-primary" type="submit">Add Data +</button>
                </Link>

            </div>

            <div>
                <table className="table ">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col" className="table-primary">First</th>
                            <th scope="col" className="table-success">Last</th>
                            <th scope="col" className="table-warning" >Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            firsts.map((item) =>
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.first}</td>
                                    <td>{item.last}</td>
                                    <td>{item.email}</td>
                                    <td> <button className="btn btn-danger" type="submit" onClick={() =>{if(window.confirm('are you sure to delete data??')) deletedata(item.id)}}>Delete  </button></td>
                                    {/* <Link to='/edit' >
                                    <td> <button className="btn btn-warning" type="submit" onClick={()=>editdata(item.id,item.first,item.last,item.email)}>Edit </button></td>
                                    </Link> */}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>)
}
