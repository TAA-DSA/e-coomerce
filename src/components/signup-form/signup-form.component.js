import { useState } from "react";

const defaultFormValue = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValue);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1> Sign up with your email and password</h1>
      <form
        onSubmit={(event) => {
          console.log("Signup button pressed");
          event.preventDefault();
        }}
      >
        <label>Display Name</label>
        <input
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <label>Password</label>
        <input
          type="new-password"
          name="password"
          required
          onChange={handleChange}
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="new-password"
          name="confirmPassword"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
