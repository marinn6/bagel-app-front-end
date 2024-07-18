// import { Link } from "react-router-dom";
// import "./NavBar.css";
// import logoImage from "./Red_Cream_Simple_Circle_Bagel_Logo-removebg-preview (1).png";

// export default function NavBar() {
//   return (
//     <nav className="NavBar">
//       <div className="logo">
//         <Link to="/bagels">
//           <img src={logoImage} alt="Logo" className="logo-image" />
//         </Link>
//       </div>
//       <ul className="nav-links">
//         <li>
//           <button className="add-bagel-button">
//             <Link to="/bagels/new">Add Bagel</Link>
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImage from "../assets/Red_Cream_Simple_Circle_Bagel_Logo-removebg-preview (1).png";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="logo">
        <Link to="/bagels">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <button className="add-bagel-button">
            <Link to="/bagels/new">Add Bagel</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
