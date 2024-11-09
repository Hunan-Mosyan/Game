import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth, db } from '../../services/firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated, setUserName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const navigate = useNavigate(); // Для навигации после регистрации

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      setIsAuthenticated(true);
      setUserName(user.displayName || user.email); // Устанавливаем имя пользователя

      toast.success('User registered successfully!', { position: 'top-center' });

      // Добавляем информацию о пользователе в базу данных
      await setDoc(doc(db, 'Users', user.uid), {
        email: user.email,
        firstName: fname,
        lastName: lname,
      });

      // После регистрации перенаправляем на экран приветствия
      navigate('/profile');
    } catch (error) {
      toast.error(error.message, { position: 'bottom-center' });
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleRegister} className="register-form">
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>

        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
};

export default Register;
