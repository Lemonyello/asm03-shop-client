import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";
import { signup } from "../../store/url";

// in register page, is a form for user to register a new account by filling out username, email, password, phone number
const SignupForm = () => {
  const navigate = useNavigate();
  // the data we get back after the form is submitted
  const actionData = useActionData();

  // all text inputs are required, user must fill in and the content must be correct or else the form cannot be submitted
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
        <Form method="POST" className={styles.form}>
          <input type="text" name="name" required placeholder="Full Name" />
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
          {actionData && (
            <p className={styles["error-text"]}>{actionData.msg}</p>
          )}
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
  try {
    const formData = await request.formData();
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      phone: formData.get("phone"),
      role: "user",
    };

    const res = await fetch(signup, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (res.ok) return redirect("/login");
    else return data;
  } catch (error) {}
}
