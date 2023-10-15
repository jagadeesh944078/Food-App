import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } =
    resData.info;
  return (
    <div>
      <img
        alt="card-logo"
        className="rounded-lg w-[200px] h-[200px] object-cover"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl line-clamp-1">{name}</h3>
      <p className="font-semibold text-l">⭐ {avgRating} stars</p>
      <p className="line-clamp-1">{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
