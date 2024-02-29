import React, { useState } from 'react';
import axios from '../config/axios-config';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './SignUpForm.css'; // Create a CSS file for additional styling if needed

const SignUpForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post('/api/auth/signup', { username, password });
            console.log('Signup successful:', response.data);
            // Optionally, redirect to login page or handle success
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.error('Error during signup:', error.response.data.message);
            // Handle signup error
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Sign Up</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" onClick={handleSignup} className="btn btn-primary w-100">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
