import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ProductCardContainer,
  Image,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCards = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);
  const addProductsToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductsToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCards;
