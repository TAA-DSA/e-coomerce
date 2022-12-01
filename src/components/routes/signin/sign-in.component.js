import {
  //   auth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await getRedirectResult(auth);

  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     fetchData().catch(console.error);
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
    </div>
  );
};

export default SignIn;
