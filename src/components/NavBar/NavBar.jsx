import React, { useState } from "react";
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="Navbar">
        <span className="nav-logo">ProHardware</span>
        <div className={`nav-menu ${isOpen && "open"}`}>
                <a href="#">Tarjetas de Video</a>
                <a href="#">Procesadores</a>
                <a href="#">MotherBoards</a>
                <a href="#">Memorias Ram</a>
                <a href="#">Fuentes</a>
                <a href="#"><CartWidget/></a>
            </div>
            <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
            
        </div>
    )

}

export default NavBar