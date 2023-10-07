import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card">
      <img
        alt="card-logo"
        width="200"
        height="200"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p>{avgRating} stars</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
