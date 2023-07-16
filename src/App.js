import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import Complaints from './Components/Complaints';
import Profile from './Components/Profile';
import './App.css'
import AdminComplaints from './Components/AdminComplaints';
import Reports from './Components/Reports';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        

        {/* <main className="flex-grow-1">
        <Landing />
      </main> */}


        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/admin" element={<AdminComplaints />} />
          <Route path="/report/:complaints_id" element={<Reports />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;