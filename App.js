import React from "react";
import ReactDOM from "react-dom/client";

/**
 * applayout
 *
 *
 *
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://image.similarpng.com/very-thumbnail/2020/08/Fresh-food-logo-design-on-transparent-background-PNG.png"
        />
      </div>

      <div className="nav-items">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // console.log(props);
  const {name,cousines}=props

  return (
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597" />
      <h3>{name}</h3>
      <h4>{cousines}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input /> search
      </div>

      <div className="res-container">
        <RestaurantCard name="Meghana Food" cousines="Murga Biryani Non Veg" />
        <RestaurantCard name="KFC" cousines="Coffee Food Tea" />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
