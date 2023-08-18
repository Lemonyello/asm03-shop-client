import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";
import * as storage from "../../store/local-storage";

// in register page, is a form for user to register a new account by filling out username, email, password, phone number
const SignupForm = () => {
  const navigate = useNavigate();
  // the data we get back after the form is submitted
  const actionData = useActionData();
  const errorText = (
    <p className={styles["error-text"]}>
      This email already existed. Please choose another.
    </p>
  );

  // all text inputs are required, user must fill in and the content must be correct or else the form cannot be submitted
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
        <Form method="POST" className={styles.form}>
          <input type="text" name="fullName" required placeholder="Full Name" />
          {/* email must be correct form */}
          <input type="email" name="email" required placeholder="Email" />
          <input
            type="text"
            name="password"
            // password must has min length 9
            minLength={9}
            required
            placeholder="Password"
          />
          <input type="tel" name="phone" required placeholder="Phone" />
          {actionData?.status === 500 && errorText}
          <button>Sign up</button>
        </Form>
        <p>
          Login? <button onClick={navigate.bind(null, "/login")}>Click</button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;

// this function runs when  user click button Sign up and the form is validated
export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
  };
  const users = storage.getFromStorage(storage.USERS, []);

  // if this email is already in the local storage, user cannot use this email for a new account
  if (users.some((usr) => usr.email === data.email)) return { status: 500 };
  else {
    // if this email doesn't exist in local storage, save this account to storage
    storage.saveToStorage(storage.USERS, [...users, data]);

    return redirect("/login");
  }
}
