import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListRestaurants, setListRestaurants] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter-btn">
        <button onClick={()=> {
          const filterList=restaurants.filter((value)=>value.info.avgRating>4.5)
          setListRestaurants(filterList)
        } 
        }>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {ListRestaurants.map((value) => (
          <RestaurantCard key={value.info.id} resdata={value} />
        ))}
        {/* <RestaurantCard resdata={restaurants[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
