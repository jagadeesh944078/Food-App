import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();

  const resMenu = useRestaurentMenu(id);

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines } = resMenu?.cards[0]?.card?.card?.info;

  const categories =
    resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="w-6/12 m-auto">
      <h1 className="font-bold">{name}</h1>
      <p>{cuisines.join(",")}</p>
      {categories.map((res, index) => (
        <RestaurantCategory
          key={res.card.card.title}
          data={res.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
