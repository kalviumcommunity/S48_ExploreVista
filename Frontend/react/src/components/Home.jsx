import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import '../App.css';

function Home() {
  const [users, setUsers] = useState([]);
3
  useEffect(() => {
    axios.get('http://localhost:3000/') // Update the endpoint to the correct one
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="api">
      {users &&
        users.map((guides, id) => (
          <div className="data" key={id}>
            <p><strong>Place: </strong>{guides.place}</p>
            <p><strong>City: </strong>{guides.city}</p>
            <p><strong>State: </strong>{guides.state}</p>
            <p><strong>Vehicles Available: </strong>{guides.vehicles_available}</p>
            <p><strong>Options to Stay: </strong>{guides.options_to_stay}</p>
            <p><strong>Best Time to Visit: </strong>{guides.best_time_to_visit}</p>
          </div>
        ))}
    </div>
  );
}

export default Home;
