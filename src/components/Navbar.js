import {useState} from 'react';
import Logo from "../images/logo.svg"
import menuLogo from "../images/icon-hamburger.svg"
export default function Navbar(){
    const [isActive, setIsActive] = useState(false);

    const showMenu = event => {
    
        setIsActive(current => !current);
    };
    return(
        <header className="header">
            <nav className="navbar">
                <section className="brand">
                    <img className="brand-logo" src={Logo} alt="logo"/>
                </section>
                <section className="left-nav">
                    <ul className={isActive ? 'ham-menu' : 'nav-list'} >
                        <li className="nav-item">About</li>
                        <li className="nav-item">Services</li>
                        <li className="nav-item">Projects</li>
                        <li className="nav-item contact">Contact</li>
                    </ul>
                    <img className="menu" src={menuLogo} onClick={showMenu} alt="hamburger"/>
                </section>
            </nav>
        </header>
    )
}