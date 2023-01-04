import { Fragment, useContext } from "react";
import { UserContext } from "../../../contexts/user.context";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropDown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
