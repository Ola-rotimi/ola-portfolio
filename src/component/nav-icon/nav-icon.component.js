import { GrHomeRounded } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { Link } from "react-router-dom";


import "./nav-icon.styles.scss";

const NavIcon = () => {
    return (
        <div className="nav-icon">
            <Link to="/"><GrHomeRounded /></Link>
            <Link to="/about"><BsPersonFill /></Link>
            <Link to="/projects"><MdWorkOutline /></Link>
            <Link to="/contact"><FaRegAddressBook /></Link>
        </div>
  );
};

export default NavIcon;