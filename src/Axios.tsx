import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Axios: React.FC = () =>{

    const [data,setData]=useState<[]>([]);
    const [error,setError]=useState<string>();
    const [loading,setLoading]=useState<boolean>(false);

    

    useEffect(()=>{
        console.log("This is Axios");
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            console.log(response)
            console.log(response.data)
            setLoading(false);
            setData(response.data)
          })
          .catch((error) => {setError(error.message)
            setLoading(false);
          });
    },[]);

    return(<div>
        <h2>User Names: Called using Axios</h2>

{error && <h2 style={{color:"red"}}>{error}</h2>}
{loading && <h2>loading...</h2>}

{data.map((user:any)=><div key={user.id}>{user.name}</div>)}
    </div>)
}

export default Axios;