import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

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

export default Body;
