import { Form, Link } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";

const SignupForm = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h1>Sign Up</h1>
        <Form className={styles.form}>
          <input type="text" name="fullName" required placeholder="Full Name" />
          <input type="email" name="email" required placeholder="Email" />
          <input type="text" name="password" required placeholder="Password" />
          <input type="text" name="Phone" required placeholder="Phone" />
          <button>Sign up</button>
        </Form>
        <p>
          Login? <Link to="/login">Click</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
