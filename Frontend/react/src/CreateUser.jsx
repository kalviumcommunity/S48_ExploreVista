import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./components/Form.css";

function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState(""); // New state for password match error
    const navigate = useNavigate();

    const isEmailValid = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if name is empty
        if (!name.trim()) {
            setNameError("Name cannot be empty");
            return;
        } else {
            setNameError("");
        }

        // Check if name has a minimum of 3 letters
        if (name.trim().length < 3) {
            setNameError("Name must have at least 3 letters");
            return;
        } else {
            setNameError("");
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setPasswordMatchError("Passwords do not match");
            return;
        } else {
            setPasswordMatchError(""); // Clear the error if passwords match
        }

        // Check if the email is in a valid format
        if (!isEmailValid(email)) {
            setEmailError("Invalid email format");
            return;
        } else {
            setEmailError("");
        }

        // Create user object
        const newUser = { name, email, age, password };

        // Send the user data to the server
        axios.post("http://localhost:3001/users", newUser)
            .then(result => {
                console.log(result);
                setEmailError("");
                setNameError("");
                setPasswordMatchError("");
                navigate('/Home');
            })
            .catch(err => {
                console.error(err);
                setEmailError("");
                setNameError("");
                setPasswordMatchError("");
            });
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-100 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Name" className="form-control"
                            onChange={(e) => setName(e.target.value)} />
                        {nameError && <div className="text-danger">{nameError}</div>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter Email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <div className="text-danger">{emailError}</div>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input type="text" id="age" placeholder="Enter Age" className="form-control"
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" className="form-control"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" className="form-control"
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        {passwordMatchError && <div className="text-danger">{passwordMatchError}</div>}
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
