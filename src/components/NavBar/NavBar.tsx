import { useState } from "react";
import "./NavBar.css";


interface NavBarProps {
    logo: string;
    items: string[];
    btn: string;
}

const NavBar = ({ logo, items, btn }: NavBarProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* TOP BANNER */}
            <div className="top-banner">
                <img src="/assets/images/Top Banner.png" alt="Top Banner" />
            </div>

            {/* NAV CONTENT */}
            <div className="nav-content">
                <img src={logo} alt="Logo" className="logo-img" />

                <div className="nav-right">
                    <ul className="nav-items">
                        {items.map((item, index) => (
                            <li key={index} className="nav-item">{item}</li>
                        ))}
                    </ul>
                    <button className="contact-btn">{btn}</button>
                </div>

                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src="/assets/images/bars.svg"/>
                </button>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="mobile-menu">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="mobile-item">{item}</li>
                        ))}
                    </ul>
                    <button className="mobile-contact-btn">{btn}</button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;