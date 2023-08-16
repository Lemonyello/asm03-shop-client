import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";
import * as storage from "../../store/local-storage";

const SignupForm = () => {
  const navigate = useNavigate();
  const actionData = useActionData();
  const errorText = <p className={styles["error-text"]}>User existed.</p>;

  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
        <Form method="POST" className={styles.form}>
          <input type="text" name="fullName" required placeholder="Full Name" />
          <input type="email" name="email" required placeholder="Email" />
          <input
            type="text"
            name="password"
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

export async function action({ request }) {
  const formData = await request.formData();
  const data = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
  };
  const users = storage.getFromStorage(storage.USERS, []);
  // const users = JSON.parse(localStorage.getItem("users") ?? JSON.stringify([]));
  if (users.some((usr) => usr.email === data.email)) return { status: 500 };
  else {
    storage.saveToStorage(storage.USERS, [...users, data]);
    // localStorage.setItem("users", JSON.stringify([...users, data]));
    return redirect("/login");
  }
}
