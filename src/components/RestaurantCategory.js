import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const { title, itemCards } = data;
  return (
    <div>
      <div
        className="flex justify-between shadow-md p-4 my-4"
        onClick={() => {
          setShowIndex();
        }}
      >
        <div>
          <span className="font-bold">{title}</span>
          <span className="mx-2 font-bold">({itemCards.length})</span>
        </div>
        <div>{showItems ? "⬆️" : "⬇️"}</div>
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
