import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlinestatus";
const Header = () => {
  const [btn, setbtn] = useState("login");
  return (
    <div className="flex items-center justify-between px-4 bg-orange-500 ">
      <div className="logo-container">
        <img className="h-16 w-16 rounded-full" src={LOGO_URL} />
      </div>
      <div className="sd">
        <ul className="flex items-center gap-6 font-bold">
          <li>{useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="px-2 border-2 border-black"
              onClick={() => {
                if (btn == "login") setbtn("log out");
                else setbtn("login");
                // console.log("login  clicked");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
