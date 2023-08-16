import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";
import { useRef } from "react";
import * as storage from "../../store/local-storage";

const SigninForm = () => {
  const navigate = useNavigate();
  const actionData = useActionData();
  const errorText = (
    <p className={styles["error-text"]}>User does not exist.</p>
  );
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
export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const users = storage.getFromStorage(storage.USERS, []);
  // const users = JSON.parse(localStorage.getItem("users") ?? JSON.stringify([]));
  if (
    users.some(
      (usr) => usr.email === data.email && usr.password === data.password
    )
  ) {
    
    storage.saveToStorage(
      storage.CURRENT_USER,
      users.find((usr) => usr.email === data.email)
    );
    // localStorage.setItem(
    //   "current_user",
    //   JSON.stringify(users.find((usr) => usr.email === data.email))
    // );
    return redirect("/");
  } else return { status: 500 };
}
