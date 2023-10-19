import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="px-2">
      {items.map((item) => (
        <div key={item.card.info.id} className="my-2 flex">
          <div className="w-10/12">
            <p className="font-semibold text-md">{item.card.info.name}</p>
            <p className="text-sm font-semibold">
              ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
            <p className="text-sm text-gray-400 my-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12">
            <button
              className="absolute bg-white py-1 px-6 mx-2 my-16 text-green-400 rounded-md font-semibold shadow-md"
              onClick={() => handleCartItems(item)}
            >
              Add
            </button>
            <img
              alt="image"
              src={LOGO_URL + item.card.info.imageId}
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
