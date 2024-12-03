import CategoryList from "./CategoryList";
const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className=" p-2 flex justify-between w-6/12 mx-auto my-4 font-bold text-xl bg-slate-100">
        <h2>
          {data.title}({data.itemCards.length})
        </h2>
        <p>🔽</p>
      </div>

      <div>
        <CategoryList list={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
