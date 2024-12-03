import { CDN_URL } from "../utils/Constants";
const RestaurantCard = (props) => {
  // console.log(props);
  // console.log(props?.resdata?.info?.id);
  const data = props?.resdata?.info;

  return (
    <div className="bg-gray-50 mt-4 h-92 w-80 hover:scale-95 ease-in duration-300 font-medium">
      <img
        className="mb-2 h-64 w-full rounded-xl overflow-hidden"
        src={CDN_URL + data.cloudinaryImageId}
      />
      <h3>{data.name}</h3>
      <h4>{data.locality}</h4>
      <h5>{data.avgRating}⭐</h5>
    </div>
  );
};

export default RestaurantCard;
