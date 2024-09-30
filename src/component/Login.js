import React, { useState } from 'react';
import { login } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            setMessage('Login successful');
            navigate('/search');
        } catch (error) {
            setMessage(error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='card text-bg-light col-12 col-md-6 col-lg-4 mx-auto mt-5' >
                <div class="card-body">
                    <h2 className="text-center mb-4"> Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input ttype="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        </>

    );
}

export default Login;
