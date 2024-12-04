import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center font-bold  text-xl m-4">
      <h1>Cart</h1>
      <button
        onClick={handleClearCart}
        className="font-light px-2 m-2 border-4 border-black rounded-xl bg-black  text-white"
      >
        Clear Cart
      </button>
      {(cartItems.length==0 && <h1 className="font-normal">Your Cart is Empty... </h1>)}
      <CategoryList list={cartItems} />
    </div>
  );
};

export default Cart;
