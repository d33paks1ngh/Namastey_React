import RestaurantCard from "./RestaurantCard";
// import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_LIST } from "../utils/Constants";

const Body = () => {
  const [ListRestaurants, setListRestaurants] = useState([]);
  const [searchList, setsearchList] = useState(ListRestaurants);
  const [searchText, setsearchText] = useState("");
  // console.log(searchList);

  useEffect(() => {
    fetchData();
    // console.log("useEffect called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    let apidata =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListRestaurants(apidata);
    setsearchList(apidata);
    // console.log(apidata);
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
        <div className="search">
          <input
            className="search-box"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filterSearch = ListRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setsearchList(filterSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filterList = ListRestaurants.filter(
              (value) => value.info.avgRating > 4.2
            );
            setsearchList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {searchList.map((value) => (
          <Link
            key={value.info.id}
            className="resLink"
            to={"/restaurant/" + value.info.id}
          >
            <RestaurantCard resdata={value} />
          </Link>
        ))}
        {/* <RestaurantCard resdata={restaurants[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
