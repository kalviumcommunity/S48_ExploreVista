import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Experiences() {
  const { id } = useParams(); // Extract id from URL parameters
  const [loading, setLoading] = useState(true); // Add loading state
  const [experiences, setExperiences] = useState([]);
  const [newPlace, setNewPlace] = useState('');
  const [newExperience, setNewExperience] = useState('');
  console.log(id,"from api localhost ")

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        if (id) {
          const response = await axios.get(`https://s48-explorevista-2.onrender.com/getusers/${id}`);
          if (!Array.isArray(response.data)) {
            const userExperiences = response.data.experiences || [];
            setExperiences(userExperiences);
          } else {
            console.error('Response data is not an array:', response.data);
          }
        }
      } catch (error) {
        console.error('Error fetching experiences:', error);
      } finally {
        setLoading(false); // Update loading state regardless of success or failure
      }
    };

    fetchExperiences();
  }, [id]);

  const handleAddExperience = async () => {
    try {
      if (!id) {
        console.error('User ID is undefined');
        return;
      }
      console.log(newPlace,newExperience)
      const response = await axios.put(`https://s48-explorevista-2.onrender.com/updateUsers/${id}`, {
        
        place: newPlace,
        experience: newExperience
      });
      console.log('Response after adding experience:', response);
      setExperiences([...experiences, { place: newPlace, experience: newExperience }]);
      setNewPlace('');
      setNewExperience('');
    } catch (error) {
      console.error('Error adding experience:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // Render a loading message
  }

  return (
    <div>
      <h2>User Experiences</h2>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <p><strong>Place: </strong>{experience.place}</p>
            <p><strong>Experience: </strong>{experience.experience}</p>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="Enter place" value={newPlace} onChange={(e) => setNewPlace(e.target.value)} />
        <input type="text" placeholder="Enter experience" value={newExperience} onChange={(e) => setNewExperience(e.target.value)} />
        <button onClick={handleAddExperience}>Add Experience</button>
      </div>
    </div>
  );
}

export default Experiences;