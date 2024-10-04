import React, { useState } from 'react';
import { register } from '../Services/AuthService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

// Modal Component
const Modal = ({ message, onClose }) => {
  return (
    <div className="modal show text-center" tabindex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Message</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Validation function

  const validateForm = () => {
    const newErrors = {};
    const usernameRegex = /^\d{10}$/;
    // Username validation: at least 10 characters and contains a number
    if (!username || username.length < 10|| !usernameRegex.test(username)) {
      newErrors.username = 'Username must be exactly 10 digits long and contain only numbers.';
    }
   
    // Password validation: at least 6 characters long
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
        return;  // Stop the submission if validation fails
      }
    try {
      await register(username, password);
      setModalMessage('Registration successful');
      setIsModalOpen(true); // Open modal
      setTimeout(() => {
        setIsModalOpen(false); 
        navigate('/login'); // Redirect to login page
      }, 5000);
    } catch (error) {
    //   setMessage(error.response?.data?.message || 'Registration failed');
      setModalMessage('Please correct the  form');
      setIsModalOpen(true); // Open modal
      setUsername("")
      setPassword("")
    }

  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <Navbar />
      <div className='card text-bg-light col-12 col-md-6 col-lg-4 mx-auto mt-5'>
        <div className="card-body">
          <h2 className="text-center mb-4">Register</h2>
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
                {/* Display username validation error */}
                {errors.username && <p className="text-danger">{errors.username}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="exampleInputPassword1"
              />
                {/* Display password validation error */}
                {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            {message && <p>{message}</p>}
          </form>
          {isModalOpen && (
            <Modal message={modalMessage} onClose={closeModal} />
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
