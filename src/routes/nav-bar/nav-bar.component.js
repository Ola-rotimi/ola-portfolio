import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "./nav-bar.styles.scss";
import Logo from "../../assets/images/olarotimi-logo.png";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <div className="nav-bar">
        <div className={click ? "logo-active" : "logo"}>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className={click ? "hamburger-active" : "hamburger"} onClick={handleClick}>
          {click ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </div>
        <div className={click ? "links-active" : "links"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
