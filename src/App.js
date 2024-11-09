import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from './services/firebase/firebase';
import Login from './components/login';
import Register from './components/register';
import Profile from './profile';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Game from "./components/game";
import './App.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);  

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setIsAuthenticated(true);
      setUserName(user.displayName || user.email);
    }
  }, []);

  return (
    <Router>
      <div className={`app ${isAuthenticated ? 'logged-in' : ''}`}>
        <div className="App">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} setUserName={setUserName} />} />
                <Route path='/register' element={<Register setIsAuthenticated={setIsAuthenticated} setUserName={setUserName} />} />
                <Route path='/profile' element={<Profile userName={userName} />} />
                
          
                <Route path="/game" element={<Game setIsGameStarted={setIsGameStarted} />} />
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
