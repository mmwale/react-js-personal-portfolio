import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navbar(){
    const [navActive, setNavActive] = useState(false);

    // function to open nav
    const toggleNav = () => {
        setNavActive(!navActive);
    }

    // function to close nav
    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu;
        }

    }, []);
    
    // className has curly brackets to point to the active nav
    return (
        // this nav returns active if the navbar is active and not-active if it is not.
        <nav className={ `navbar ${navActive?"active" : " "}`}>
            <div>
                <img src="./img/mlogo1.svg" alt="Medan's Portfolio" />
            </div>
            <a className={`nav__hamburger ${navActive?"active" : " "}`} onClick={toggleNav}>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
                <span className="nav__hamburger__line"></span>
            </a>
            <div className={`navbar--items ${navActive? "active" : " "}`}>
                <ul>  {/* This unordered list contains links to the navigation bar */}
                    <li>
                        <Link onClick = {closeMenu} activeClass = "navbar--active-content" spy={true} smooth = {true} offset = {-70} duration = {500} to= "heroSection" className="navbar--content">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick = {closeMenu} activeClass = "navbar--active-content" spy={true} smooth = {true} offset = {-70} duration = {500} to= "AboutMe" className="navbar--content">
                            AboutMe
                        </Link>
                    </li>
                    <li>
                        <Link onClick = {closeMenu} activeClass = "navbar--active-content" spy={true} smooth = {true} offset = {-70} duration = {500} to= "mySkills" className="navbar--content">
                            MySkills
                        </Link>
                    </li>
                    <li>
                        <Link onClick = {closeMenu} activeClass = "navbar--active-content" spy={true} smooth = {true} offset = {-70} duration = {500} to= "MyPortfolio" className="navbar--content">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link onClick = {closeMenu} activeClass = "navbar--active-content" spy={true} smooth = {true} offset = {-70} duration = {500} to= "Reviews" className="navbar--content">
                            Reviews
                        </Link>
                    </li>
                </ul>
            </div>
            <Link onClick = {closeMenu} activeClass = "navbar--active-content" spy={true} smooth = {true} offset = {-70} duration = {500} to= "Contact" className="btn btn-outline-primary">Contact Me
            </Link>
        </nav>
    );

}

export default Navbar;