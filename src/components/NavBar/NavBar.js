import React from 'react'
import { Link, NavLink} from 'react-router-dom';
import "./NavBar.css"
import brightlogo from '../../assets/images/material-symbols_menu-book-outline.png'

function NavBar1() {
    return (
        <div className='nav-wrap'>
            <div className="navigation">
                <nav className="navbar navbar-expand">
                <div className='brightstream-icon-container' >
                    <img src={brightlogo} alt="BS-logo" ></img>
                </div>
                <NavLink to="/" className="navbar-brand">BrightStream</NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" id="class-option" to="/Class">
                                Class
                                <span className="sr-only"></span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="schedule-option" to="/Schedule">
                                Schedule
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="collaborate-option" to="/Collaborate">
                                Collaborate
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="quiz-option" to="/Quiz">
                                Quiz
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="privacy-option" to="/Privacy">
                                Privacy
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
      </div>
    );
  }

export default NavBar1;