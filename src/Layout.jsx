import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout