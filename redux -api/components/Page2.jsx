import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { pagedata } from "../features/PageSlice";

export default function Page2() {
  const name = useSelector((name) => name);     //we can use .map on name for get data
  const dispatch = useDispatch();              // take action from user

  console.log("name", name);
  if (name.page.isLoading) {
    //page is key
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary"
          onClick={(e) => dispatch(pagedata())}  //we  perform action to det(show) data on api & redux toolkit
        >
          {" "}
          getdata
        </button>
      </div>
      <div className="container justify-content-center mt-1">
        <table className="table container ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">WEBSITE</th>
            </tr>
          </thead>
          <tbody>
            {name.page.data &&
              name.page.data.map((e) => (
                <tr key={e.id}>
                  <th scope="row">{e.id}</th>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.website}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="container d-flex justify-content-center mt-4">
          <Link to="/">
            <button className="btn btn-warning">click for previous page</button>
          </Link>
        </div>
      </div>
    </>
  );
}
