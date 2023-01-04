import {
  CartDropDownContainer,
  EmptyMessage,
  CartItemsStyles,
} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItems from "../cart-items/cart-items.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItemsStyles>
        {cartItems.length ? (
          cartItems.map((item) => <CartItems key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsStyles>

      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
