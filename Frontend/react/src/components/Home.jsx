import React from "react";
import Navbar from '../Navbar';
import axios from 'axios'; 
import { useEffect, useState } from 'react';

function Home(){
    const [users,setUsers] = useState([])
    useEffect(() => {
     axios.get('http://localhost:3000/')
     .then(users => setUsers(users.data))
     .catch(err => console.log(err))
    },[])
    return(
        <div className="api">
        {users &&
            users.map((guides, id) => (
              <div className="data" key={id}>
                <p><strong>Place: </strong>{guides.place}</p>
                <p><strong>Vehicles Available: </strong>{guides.vehicles_available}</p>
                <p><strong>Options to Stay: </strong>{guides.options_to_stay}</p>
                <p><strong>Brief History: </strong>{guides.brief_history}</p>
                <p><strong>Best Time to Visit: </strong>{guides.best_time_to_visit}</p>
  
              </div>
            ))}
          
        </div>
        
    )
}
export default Home;
