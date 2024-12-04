import { useDispatch } from "react-redux";
import { CDN_URL, VEG_LOGO } from "../utils/Constants";
import { addItems } from "../utils/cartSlice";

const CategoryList = ({ list }) => {
  const dispatch = useDispatch();

  const handleAddItems = (ls) => {
    // dispatch an action
    dispatch(addItems(ls));
    console.log("add button clicked");
  };

  return (
    <div className="font-light text-sm bg-slate-#FFFFFF w-6/12 m-auto">
      {list.map((ls) => (
        <div
          className="flex justify-between border-b-2 my-2 p-4"
          key={ls.card.info.id}
        >
          <div className="font-bold text-sm text-left font-sans w-9/12">
            <h2>
              {ls.card.info.isVeg && (
                <img className="w-8 rounded-full" src={VEG_LOGO} />
              )}
            </h2>
            <h3 className="text-lg">{ls.card.info.name}</h3>
            <h6>
              ₹ {ls.card.info.price / 100 || ls.card.info.defaultPrice / 100}
            </h6>
            <h6 className="font-normal">{ls.card.info.description}</h6>
          </div>

          <div className="w-3/12 h-auto relative">
            <button
              onClick={() => handleAddItems(ls)}
              className="absolute px-8 py-2  bottom-2 right-8 border shadow-xl bg-white font-bold text-green-400 rounded-xl"
            >
              ADD
            </button>
            <img
              className="w-72 rounded-lg"
              alt="no img"
              src={CDN_URL + ls.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
