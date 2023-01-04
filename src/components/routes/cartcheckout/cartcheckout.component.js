import React from "react";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./cartcheckout.styles";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart.context";
import CheckOutItems from "../../../components/checkout-items/checkout-items.component";

const CartCheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckOutItems key={cartItem.id} cartItem={cartItem} />;
      })}

      <Total> Total: ${cartTotal} </Total>
    </CheckoutContainer>
  );
};

export default CartCheckOut;
