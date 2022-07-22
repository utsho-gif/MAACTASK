import React from "react";
import { Link } from "react-router-dom";
import logo from '../../asset/FieldX.png';
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to='/home'><img src={logo} alt="" /></Link>
        
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/login'><button class="btn btn-primary">Login</button></Link>           
          </li>
          <li>
            <Link to='/registration'><button class="text-primary btn glass">Registration</button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
