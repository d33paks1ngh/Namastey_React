import RestaurantCard from "./RestaurantCard";
// import restaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlinestatus";

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
    // console.log(json.data?.cards[4])
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

  if (!useOnlineStatus())
    return <h1>Oops Please Check Your Internet Connection !!!</h1>;

  // conditional rendering

  // if (ListRestaurants.length == 0) {
  //   return <Shimmer />;
  // }

  // we can club the code using ternery operator...
  return ListRestaurants?.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center justify-around">
        <div className="mx-8 my-4 px-4">
          <input
            className="border-black border-2 rounded-md "
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="border-2 border-black  bg-green-200 rounded-2xl font-semibold px-4 mx-2"
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
          className="border-2 border-black  bg-green-200 rounded-2xl font-semibold px-2"
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

      <div className="mt-8 flex flex-wrap items-center justify-evenly">
        {searchList?.map((value) => (
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
