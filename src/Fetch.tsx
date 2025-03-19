import React,{ useEffect, useState } from "react"

const Fetch: React.FC = () => {

      const [data,setData]=useState<[]>([]);
      const [error,setError]=useState<string>();
      const [loading,setLoading]=useState<boolean>(false);

      console.log("This is fetch");

      

       useEffect(()=>{ 
        console.log("This is fetch");
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`There was an error in fetching! Status: ${response.status}`);
            }
            setLoading(false);
            return response.json();
          })
          .then((data) => setData(data))
          .catch((error) => {setError(error.message)
            setLoading(false);
          });
        },[])
      
          return(<div>
            <h2>User Names: Called using Fetch</h2>

            {error && <h2 style={{color:"red"}}>{error}</h2>}
            {loading && <h2>loading...</h2>}
            
            {data.map((user:any)=><div key={user.id}>{user.name}</div>)}
          </div>)
}

export default Fetch;