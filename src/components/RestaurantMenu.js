import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setshowIndex] = useState(null);

  const resMenuinfo = useRestaurantMenu(resId);

  if (resMenuinfo === null) return <Shimmer />;

  const menu =
    resMenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;
  // console.log(menu);

  // const categories = resMenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(resMenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resMenuinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (value) => {
        return (
          value.card.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(categories);
  // // console.log(categories.filter((value)=>{
  // //   value.card.card.["@item"]
  // }))
  // console.log(resMenuinfo);
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
        Rating {avgRating}⭐ and Cost For Two Rs {costForTwo / 100}
      </p>
      <h2 className="m-4 font-serif text-2xl font-bold text-orange-500 ">
        Menu
      </h2>
      {categories.map((category, index) => (
        // Rastaurant Category is a controlled component NOW...
        // RestaurantMenu is controlling RestaurantCategory component
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex && true}
          showIndex={() => {
            if (showIndex === index) setshowIndex(false);
            else setshowIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
