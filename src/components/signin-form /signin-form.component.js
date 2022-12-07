import { useContext, useState } from "react";
import FormInput from "../form-input/form-input.component";
import "./signin-form.styles.scss";
import Button from "../button/button.component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const defaultFormValue = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormInputs = () => {
    setFormFields(defaultFormValue);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserEmailAndPassword(email, password);
      console.log(user);

      setCurrentUser(user);

      resetFormInputs();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password doesn't match");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="new-password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
