import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Print() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getusers')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="api">
      {users && users.map((user, id) => (
        <div className="data" key={id}>
          <p><strong>Name: </strong>{user.name}</p>
          {user.places && user.places.map((place, index) => (
            <div key={index}>
              <p><strong>Places Visited: </strong>{place.name}</p>
              <p><strong>Experiences: </strong>{place.experiences.join(', ')}</p>
              <p><strong>Feedback: </strong>{place.feedback}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Print;
