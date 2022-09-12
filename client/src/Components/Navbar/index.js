import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Navbar() {
     return <div className="Navbar">

          <Link to="/login">Login</Link>
  </div>;
}

export default Navbar;
