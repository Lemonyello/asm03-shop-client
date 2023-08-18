import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";
import { useRef } from "react";
import * as storage from "../../store/local-storage";

// in sign in page
const SigninForm = () => {
  const navigate = useNavigate();
  // get the data that is returned after the form is submitted
  const actionData = useActionData();
  const errorText = (
    <p className={styles["error-text"]}>
      Email or password is incorrect. Please try again.
    </p>
  );

  // if email or password is wrong, clear password field
  const passwordRef = useRef();
  if (actionData?.status === 500) passwordRef.current.value = "";

  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h1>Sign In</h1>
        <Form method="POST" className={styles.form}>
          <input type="email" name="email" required placeholder="Email" />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            ref={passwordRef}
          />
          {actionData?.status === 500 && errorText}
          <button>Sign in</button>
        </Form>
        <p>
          Create an account?{" "}
          <button onClick={navigate.bind(null, "/register")}>Sign up</button>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;

// this function runs when user click Sign in and the form is validated
export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const users = storage.getFromStorage(storage.USERS, []);

  // if email and password are correct
  if (
    users.some(
      (usr) => usr.email === data.email && usr.password === data.password
    )
  ) {
    // save this user as current user, for Navbar to hide btn Login and show btn Logout
    storage.saveToStorage(
      storage.CURRENT_USER,
      users.find((usr) => usr.email === data.email)
    );

    // then redirect to Home, Home page will dispatch action login for Navbar to re-render, we can't dispatch here
    return redirect("/");
  } else return { status: 500 };
}
