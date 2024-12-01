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
    <div className="text-center mt-8">
      <h1 className="font-bold text-3xl text-pink-700">{name}</h1>
      <h2 className="font-normal text-xl">
        {city} -{areaName}
      </h2>
      <h3 className="font-normal text-xl">{cuisines.join(",")}</h3>
      <p className="font-bold text-xl">
        Rating {avgRating}⭐ and {costForTwo}
      </p>

      <h2 className="m-4 font-serif text-2xl font-bold text-orange-500 ">
        Menu
      </h2>
      <ul className="font-normal text-l">
        {menu.map((elem) => (
          <li className="mt-2" key={elem.card.info.id}>
            <span className="justify-around">{elem.card.info.name}</span> -{" "}
            <span className="font-bold text-sm">Rs{elem.card.info.defaultPrice}</span>
          </li>
        ))}
        <li>{menu[0].card.info.name}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
