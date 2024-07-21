import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImage from "../assets/Red_Cream_Simple_Circle_Bagel_Logo-removebg-preview (1).png";

export default function NavBar() {
  return (
    <>
      <div className="hours-banner">
        The Bagel Lab is open Monday & Wednesday for in-person service, and
        Tuesday, Thursday & Friday for delivery only. Hours: 10am to 4pm.
      </div>
      <nav className="NavBar">
        <div className="logo">
          <Link to="/bagels">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <button className="about-lab-button">
              <Link to="/bagels/about">About the Lab</Link>
            </button>
          </li>
          <li>
            <button className="add-bagel-button">
              <Link to="/bagels/new">Suggest A BAGEL!</Link>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
