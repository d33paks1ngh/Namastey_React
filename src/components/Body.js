import RestaurantCard from "./RestaurantCard";
// import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListRestaurants, setListRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6914766&lng=77.45818609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    let apidata =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListRestaurants(apidata);
  };

  // conditional rendering

  // if (ListRestaurants.length == 0) {
  //   return <Shimmer />;
  // }

  // we can club the code using ternery operator...
  return ListRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-btn">
        <button
          onClick={() => {
            const filterList = ListRestaurants.filter(
              (value) => value.info.avgRating > 4.2
            );
            setListRestaurants(filterList);
          }}
        >
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
