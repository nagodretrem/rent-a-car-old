import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { cartActions } from "./cartSlice";
import { RootState } from "../../store/store";
import CartModal from "../CartModal/CartModal";

type Props = {};

const Cart = (props: Props) => {
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };

  console.log(quantity);
  return (
    <>
      {" "}
      <div className="cartIcon">
        <button className="btn btn-secondary" onClick={showCart}>
          Cart: {quantity} Items
        </button>
      </div>
      <CartModal />
    </>
  );
};

export default Cart;
