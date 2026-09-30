import { Menu, X } from "lucide-react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked(!clicked);
  };

  return (
    <div className="Navbar-main-container">
      <div className="Navbar-Container">
        <div className="Navbar-Logo">Vikash Pathak</div>

        <div className="Navbar-Links">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Project
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className="hamburger"
        onClick={handleToggle}
      >
        <Menu size={24} />
      </div>

      <div className={`mobile-view ${clicked ? "show" : ""}`}>
        <div className="x" onClick={handleToggle}>
          <X size={24} />
        </div>

        <div className="Navbar-Mobile-Links">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/project"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Project
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
