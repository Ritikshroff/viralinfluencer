
import React, { useState, useEffect } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
// import TopNavBar from './components/Dashboard/TopNavBar';

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    useEffect(() => {
        // Check if the token exists in localStorage to set login status
        const token = localStorage.getItem('authToken'); // Assuming 'authToken' is the key for the token
        if (token) {
            setIsLoggedIn(true); // If the token exists, the user is logged in
        } else {
            setIsLoggedIn(false); // Otherwise, they are not logged in
        }
    }, []); // Empty dependency array to only run this on initial render

    return (
        <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;