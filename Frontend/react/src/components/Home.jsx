import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://s48-explorevista-2.onrender.com')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="api">
      {users && users.map((user, id) => (
        <div className="data" key={id}>
          <p><strong>Place: </strong>{user.place}</p>
          <p><strong>City: </strong>{user.city}</p>
          <p><strong>State: </strong>{user.state}</p>
          <p><strong>Vehicles Available: </strong>{user.vehicles_available}</p>
          <p><strong>Options to Stay: </strong>{user.options_to_stay}</p>
          <p><strong>Best Time to Visit: </strong>{user.best_time_to_visit}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
