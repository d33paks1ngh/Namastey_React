import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
const Header = () => {
  const [btn, setbtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="btn"
              onClick={() => {
                if (btn == "login") setbtn("log out");
                else setbtn("login");
                console.log("login  clicked");
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
