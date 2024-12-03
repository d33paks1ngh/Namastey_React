import { useState } from "react";
import CategoryList from "./CategoryList";
const RestaurantCategory = ({ data, showItems, showIndex }) => {
  // const [showlist, setshowlist] = useState(false);
  const header = () => {
    showIndex();
  };

  return (
    <div>
      <div
        onClick={header}
        className=" p-2 cursor-pointer flex justify-between w-6/12 mx-auto my-4 font-bold text-xl bg-slate-100 "
      >
        <h2>
          {data.title}({data.itemCards.length})
        </h2>
        <p>{showItems ? "🔼" : "🔽"}</p>
      </div>

      <div>{showItems && <CategoryList list={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
