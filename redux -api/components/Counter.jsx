import { useSelector, useDispatch } from "react-redux";
import { fetchdata } from "../features/CounterSlice";
import { Link } from "react-router-dom";

export default function Counter() {
  const constant = useSelector((Counter) => Counter); //we can use .map on constant for get data
  const dispatch = useDispatch(); // take action from user

  console.log("constant", constant);
  if (constant.counter.isLoading) {
    //counter is key
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <button
          className="btn btn-primary"
          onClick={(e) => dispatch(fetchdata())}
        >
          {" "}
          getdata{" "}
        </button>
      </div>
      <div className="container justify-content-center mt-4">
        <table className="table container ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CITY</th>
              <th scope="col">STREET</th>
              <th scope="col">ZIP-CODE</th>
            </tr>
          </thead>
          <tbody>
            {constant.counter.data &&
              constant.counter.data.map(  //use for .map to get data  useselector variable <- store(key) <- data (action payload)
                (
                  e,
                  id //to get all data use map
                ) => (
                  <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.address.city}</td>
                    <td>{e.address.street}</td>
                    <td>{e.address.zipcode}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
        <div className="container d-flex justify-content-center mt-4">
          <Link to="/page2">
            <button className="btn btn-success">click for next page</button>
          </Link>
        </div>
      </div>
    </>
  );
}
