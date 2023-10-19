import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } =
    resData.info;
  const isDarkTheme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div className={isDarkTheme && "text-white"}>
      <img
        alt="card-logo"
        className="rounded-lg w-[300px] h-[165px] object-cover hover:w-[270px]"
        src={LOGO_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-l line-clamp-1 text-[#02060cbf]">{name}</h3>
      <p className="font-semibold text-sm">⭐ {avgRating} stars</p>
      <p className="line-clamp-1 text-[#02060cbf] text-sm">
        {cuisines.join(", ")}
      </p>
      {/* <p>{costForTwo}</p> */}
    </div>
  );
};

export default RestaurantCard;

export const withPrmotedLabel = (RestaurantCard) => {
  return ({ resData }) => {
    return (
      <div className="my-4">
        <label className="font-bold absolute text-white  text-xl">
          {resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {resData?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};
