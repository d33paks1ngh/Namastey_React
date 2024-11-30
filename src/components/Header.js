import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlinestatus";
const Header = () => {
  const [btn, setbtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="list-items">
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
              className="btn"
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
