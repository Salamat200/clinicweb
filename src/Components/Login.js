import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/users/login`, {
                email,
                password,
            }, {
                timeout: 5000, // Set a higher timeout value (in milliseconds)
            });

            setEmail('');
            setPassword('');

            // Handle successful login
            const userId = response.data.id; // Assuming the response contains the user ID
            navigate(`/profile/${userId}`);
            console.log(response.data);
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-heading"> Login here</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group3">
                    <label className="label3">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input3"
                    />
                </div>
                <div className="form-group">
                    <label className="label3">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input3"
                    />
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
