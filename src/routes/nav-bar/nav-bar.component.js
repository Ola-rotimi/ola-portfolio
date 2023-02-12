import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import "./nav-bar.styles.scss";
import Logo from "../../assets/olarotimi-logo.png";

const NavBar = () => {
    return (
        <Fragment>
            <div className="nav-bar">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default NavBar;