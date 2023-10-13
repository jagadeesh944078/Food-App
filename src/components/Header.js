import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>OnlineStatus : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
