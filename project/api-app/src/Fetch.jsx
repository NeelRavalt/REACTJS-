import axios from 'axios';
import react,{useEffect} from 'react'


function Fetch() {
  const const [data, setdata] = useState([])
    useEffect(() => {
    
        axios.get('https://dummyjson.com/products')
        .then(response => {
          // handle success
          console.log(response.data);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });

    }, []);
    return(
        <><h1>fetch data</h1></>
    )
}

export default Fetch