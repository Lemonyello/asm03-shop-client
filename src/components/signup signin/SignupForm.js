import { Form } from 'react-router-dom';
import styles from './SignupSigninForm.module.css';

const SignupForm = () => {
  return <div className={styles.bg} >
    <div className={styles.card}>
      <h1>Sign Up</h1>
      <Form className={styles.form}>
        <div className={styles.field}>
          <label>Full Name</label>
          <input type='text' name='fullName' required/>
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type='email' name='email' required/>
        </div>
        <div className={styles.field}>
          <label>Password</label>
          <input type='text' name='password' required/>
        </div>
        <div className={styles.field}>
          <label>Phone</label>
          <input type='text' name='Phone' required/>
        </div>
      </Form>
    </div>
  </div>
 };

export default SignupForm;