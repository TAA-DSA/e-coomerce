import SignUp from "../../signup-form/signup-form.component";
import SignIn from "../../signin-form /signin-form.component";

import { AuthenticationContainer } from "./authentication.styles.js";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
