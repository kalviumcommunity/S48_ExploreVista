import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Feedback() {
    const { id } = useParams(); // Get the user ID from URL parameters
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newPlace, setNewPlace] = useState('');
    const [newExperience, setNewExperience] = useState('');
    const [newFeedback, setNewFeedback] = useState('');

    useEffect(() => {
        // Fetch places with experiences and feedback for the user with the given ID
        const fetchPlaces = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:3001/getusers/${id}`);
                if (response.data && response.data.places) {
                    setPlaces(response.data.places);
                }
            } catch (error) {
                console.error('Error fetching places:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, [id]);

    const handleSubmit = async () => {
        try {
            // Submit the updated places array with experiences and feedback for the user with the given ID
            const response = await axios.put(`http://localhost:3001/updateUsers/${id}`, {
                places: places
            });
            console.log('Feedback submitted:', response.data);
            // Optionally, you can redirect the user to another page after submitting feedback
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    const handleAddPlace = () => {
        const newPlaceObj = {
            name: newPlace,
            experiences: [newExperience],
            feedback: newFeedback
        };
        setPlaces([...places, newPlaceObj]);
        setNewPlace('');
        setNewExperience('');
        setNewFeedback('');
    };

    if (loading) {
        return <p>Loading...</p>; // Render a loading message while fetching places
    }

    return (
        <div>
            <h2>Feedback</h2>
            {places.map((place, index) => (
                <div key={index}>
                    <h3>{place.name}</h3>
                    <p><strong>Experiences:</strong>
                    {place.experiences.join(', ')}</p>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Enter your feedback"
                        value={place.feedback}
                        onChange={(e) => {
                            const updatedPlaces = [...places];
                            updatedPlaces[index].feedback = e.target.value;
                            setPlaces(updatedPlaces);
                        }}
                    ></textarea>
                </div>
            ))}
            <div>
                <h3>Add New Place</h3>
                <input
                    type="text"
                    placeholder="Place Name"
                    value={newPlace}
                    onChange={(e) => setNewPlace(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Experience"
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Feedback"
                    value={newFeedback}
                    onChange={(e) => setNewFeedback(e.target.value)}
                />
                <button onClick={handleAddPlace}>Add Place</button>
            </div>
            <br />
            <button onClick={handleSubmit}>Submit Feedback</button>
        </div>
    );
}

export default Feedback;
