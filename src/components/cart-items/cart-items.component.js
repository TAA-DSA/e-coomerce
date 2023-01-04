import {
  CartItemContainer,
  CartImage,
  ItemDetails,
  Name,
} from "./cart-items.style";

const CartItems = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItems;
