import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./api";

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
  // console.log(props?.resdata?.info?.id);
  const data = props?.resdata?.info;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          data.cloudinaryImageId
        }
      />
      <h3>{data.name}</h3>
      <h4>{data.locality}</h4>
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
        {restaurants.map((value) => (
          <RestaurantCard key={value.info.id} resdata={value} />
        ))}
        {/* <RestaurantCard resdata={restaurants[0]} /> */}
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
