import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState(true);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between px-5 border border-black">
      <div className="logo-container">
        <img className="w-28" alt="logo" src={CDN_URL} />
      </div>
      <div>
        <ul className="flex my-8">
          <li className="p-2 font-bold">
            OnlineStatus : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-2 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 font-bold">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="p-2 font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 font-bold">Cart</li>
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
