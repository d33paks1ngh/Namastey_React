import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenuinfo = useRestaurantMenu(resId);

  if (resMenuinfo === null) return <Shimmer />;

  const menu =
    resMenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  // console.log(menu);

  // console.log(resMenuinfo)
  const { name, city, areaName, avgRating, cuisines, costForTwo, id } =
    resMenuinfo?.cards[2]?.card?.card?.info;
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {city} -{areaName}
      </h3>
      <h3>{cuisines.join(",")}</h3>
      <p>
        Rating {avgRating}⭐ and {costForTwo}
      </p>

      <h2>Menu</h2>
      <ul>
        {menu.map((elem) => (
          <li key={elem.card.info.id}>
            {elem.card.info.name} - Rs{elem.card.info.defaultPrice}
          </li>
        ))}
        <li>{menu[0].card.info.name}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
