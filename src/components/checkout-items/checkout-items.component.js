import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  ValueSpan,
  RemoveButton,
} from "./checkout-items.styles";

const CheckoutItems = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const deleteItemHandler = () => {
    return clearItemFromCart(cartItem);
  };

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>

      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={deleteItemHandler}> &#10005; </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItems;
