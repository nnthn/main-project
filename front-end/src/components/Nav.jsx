import "./nav.css";
import React, { useState, useEffect } from 'react';
import sprite from "../assets/sprites.svg";
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const [activeSection, setActiveSection] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.substring(1); // Remove leading '/'
        setActiveSection(currentPath || 'home'); 
    }, [location.pathname]);

    return (
        <aside>
            <nav className="nav-bar">
                <div className="nav-icons">
                    <ul>
                        <li className={activeSection === 'home' ? 'active' : 'nonactive'}>
                            <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <svg className="icon">
                                    <use xlinkHref={`${sprite}#home`} />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={activeSection === 'newsale' ? 'active' : 'nonactive'}>
                            <Link to="/newsale" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <svg className="icon">
                                    <use xlinkHref={`${sprite}#newsales`} />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={activeSection === 'restock' ? 'active' : 'nonactive'}>
                            <Link to="/restock" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <svg className="icon">
                                    <use xlinkHref={`${sprite}#restock`} />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={activeSection === 'settings' ? 'active' : 'nonactive'}>
                            <Link to="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <svg className="icon">
                                    <use xlinkHref={`${sprite}#settings`} />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="nonactive logout-container">
                    <svg className="icon">
                        <use xlinkHref={`${sprite}#logout`} />
                    </svg>
                </div>
            </nav>
        </aside>
    );
}
