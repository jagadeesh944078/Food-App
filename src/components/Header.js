import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
          <li>Cart</li>
          <button
            className="btn"
            onClick={() => {
              setBtnName(!btnName);
            }}
          >
            {btnName ? "Login" : "LogOut"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
