import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearItem());
  };

  return (
    <div className="my-4">
      <h1 className="text-center font-bold">Cart</h1>
      <div className="text-center">
        <button
          className="font-bold bg-black text-white p-2 rounded-md"
          onClick={handleClearItems}
        >
          ClearCart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
