import React from 'react'
import './header.css'
const Header = () => (
    <header className="header-wrap">
        <nav>
            <ul className="nav-bar">
                <div className="opt-wrapper">
                    <option className="nav-option">ABOUT</option>
                </div>
                <div className="opt-wrapper">
                    <option className="nav-option">EXPLORE</option>
                </div>
                <div className="opt-wrapper">
                    <option className="nav-option">FAQ</option>
                </div>
                <div className="opt-wrapper">
                    <option className="nav-option">CONTACT</option>
                </div>
                <div className="opt-wrapper">
                    <a
                        className="nav-option"
                        href="https://github.com/s-Hale/BuildTravelCards"
                    >
                        GitHub
                    </a>
                </div>
            </ul>
        </nav>
    </header>
)

export default Header
