import { CDN_URL } from "../utils/Constants";
const RestaurantCard = (props) => {
  // console.log(props);
  // console.log(props?.resdata?.info?.id);
  const data = props?.resdata?.info;

  return (
    <div className="res-card">
      <img src={CDN_URL + data.cloudinaryImageId} />
      <h3>{data.name}</h3>
      <h4>{data.locality}</h4>
    </div>
  );
};

export default RestaurantCard;
