import { Form, Link } from "react-router-dom";
import styles from "./SignupSigninForm.module.css";

const SigninForm = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <h1>Sign In</h1>
        <Form className={styles.form}>
          <input type="email" name="email" required placeholder="Email" />
          <input type="text" name="password" required placeholder="Password" />
          <button>Sign in</button>
        </Form>
        <p>
          Create an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
